from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware 
from sqlalchemy import or_, case
from pydantic import BaseModel
from typing import List, Annotated
from models.models import Base, Entity
import models
from database.database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

class MythBase(BaseModel):
  name: str
  division: str
  category: str
  description: str
  notes: str | None = None
  

class MythResponse(BaseModel):
    id: int
    name: str
    division: str
    category: str
    description: str
    notes: str | None = None

    class Config:
        orm_mode = True 

def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()

db_dependency = Annotated[Session, Depends(get_db)]

# get root

@app.get("/")
def read_root():
  return {"message": "All is well, Captain!"}



# @app.get("/entities/{id}")
# def get_category(db: Session = Depends(get_db)):
#   result = db.query(Entity).filter(
#      Entity.id == id).first()
#   if not result:
#       raise HTTPException(status_code=404, detail="Entity not found")
#   return result



@app.get("/entities/")
def get_entities(db: db_dependency):
   entities = db.query(Entity).all()
   return entities 

@app.get("/entities/search")
def search_entities(q: str, db: Session = Depends(get_db)):

    results = (
        db.query(Entity)
        .filter(
            or_(
                Entity.name.ilike(f"%{q}%"),
                Entity.division.ilike(f"%{q}%"),
                Entity.category.ilike(f"%{q}%"),
                Entity.description.ilike(f"%{q}%")
            )
        )
        .order_by(
            case(
                (Entity.name.ilike(f"%{q}%"), 1),
                (Entity.division.ilike(f"%{q}%"), 2),
                (Entity.category.ilike(f"%{q}%"), 3),
                (Entity.description.ilike(f"%{q}%"), 4),
                else_=5
            )
        )
        .all()
    )

    return results

# @app.get("/entities/olympians")
# def get_olympians(db: Session = Depends(get_db)):
#     results = db.query(Entity).filter(
#        Entity.category == "Olympian"
#        ).all()
#     return results

@app.get("/entities/by-category")
def get_entities_by_category(category: str, db: db_dependency):
    results = db.query(Entity).filter(Entity.category == category).all()
    return results

@app.get("/entities/by-division")
def get_entities_by_division(division: str, db: db_dependency):
    results = db.query(Entity).filter(Entity.division == division).all()
    return results

#post

@app.post("/entities/", response_model=MythResponse)
async def create_entities(entity: MythBase, db: db_dependency):
    try:
        db_entity = Entity(
            name=entity.name,
            division=entity.division,
            category=entity.category,
            description=entity.description,
            notes=entity.notes
        )
        db.add(db_entity)
        db.commit()
        db.refresh(db_entity)
        return db_entity
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    
@app.delete("/entities/{id}")
def delete_entity(id: int, db: db_dependency):

    entity = db.query(Entity).filter(Entity.id == id).first()

    if not entity:
        raise HTTPException(status_code=404, detail="Entity not found")

    db.delete(entity)
    db.commit()

    return {"message": f"Entity with id {id} has been deleted successfully"}
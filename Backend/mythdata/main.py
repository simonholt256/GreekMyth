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
  type: str
  description: str
  domain: str | None = None
  # relations: list[str] = []
  # stories: list[str] = []
  # symbols: list[str] = []

class MythResponse(BaseModel):
    id: int
    name: str
    type: str
    description: str
    domain: str | None = None

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



# @app.get("/entities/{entity_id}")
# async def read_entity(entity_id: int, db: db_dependency):
#   result = db.query(models.Entities).filter(models.Entities.id == entities_id).first()
#     if not result:
#       raise HTTPException(status_code=404, detail="Entity not found")
#    return result

# get full list (would like to add a limit)

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
                Entity.type.ilike(f"%{q}%"),
                Entity.description.ilike(f"%{q}%")
            )
        )
        .order_by(
            case(
                (Entity.name.ilike(f"%{q}%"), 1),
                (Entity.type.ilike(f"%{q}%"), 2),
                (Entity.description.ilike(f"%{q}%"), 3),
                else_=4
            )
        )
        .all()
    )

    return results

@app.get("/entities/olympians")
def get_olympians(db: Session = Depends(get_db)):
    results = db.query(Entity).filter(
        or_(
            Entity.type == "Olympian God",
            Entity.type == "Olympian Goddesses"
        )
    ).all()
    return results

@app.post("/entities/", response_model=MythResponse)
async def create_entities(entity: MythBase, db: db_dependency):
    try:
        db_entity = Entity(
            name=entity.name,
            type=entity.type,
            description=entity.description,
            domain=entity.domain
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
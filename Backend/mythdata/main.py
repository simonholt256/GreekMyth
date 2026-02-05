from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Annotated
from models.models import Base, Entity
import models
from database.database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()
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
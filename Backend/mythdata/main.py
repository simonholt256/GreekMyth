from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import list, Annotated

app = FastAPI()

class MythBase(BaseModel):
  type: str
  name: str
  description: str
  domain: str | None = None
  relations: str | None = None
  relevant_stories: list[str] = []
  symbols: list[str] = []

@app.get("/")
def read_root():
  return {"message": "All is well, Captain!"}
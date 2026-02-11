from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from database.database import Base



print("models.Base exists:", Base)

class Entity(Base):
  __tablename__ = 'entities'

  id = Column(Integer, primary_key=True, index=True)
  name = Column(String, index=True)
  division = Column(String, index=True)
  category = Column(String, index=True)
  description = Column(String)
  notes = Column(String, nullable=True)


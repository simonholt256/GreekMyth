from sqlalchemy import Column, Integer, String
from mythdata.database.connection import Base


class Figure(Base):
    __tablename__ = "figures"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)

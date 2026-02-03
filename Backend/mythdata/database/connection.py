
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from mythdata.config import DATABASE_URL

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False}  # SQLite-specific
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()
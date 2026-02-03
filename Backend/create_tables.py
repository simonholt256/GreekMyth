from mythdata.database.connection import engine, Base
from mythdata.models.figure import Figure

Base.metadata.create_all(bind=engine)

print("Tables created successfully!")

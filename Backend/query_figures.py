from mythdata.database.connection import SessionLocal
from mythdata.models.figure import Figure

# Open a session
session = SessionLocal()

# Query all Figure records
figures = session.query(Figure).all()

# Print each record
for f in figures:
    print(f"ID: {f.id}, Name: {f.name}")

# Close the session
session.close()

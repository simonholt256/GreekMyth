## TEMP

from mythdata.database.connection import SessionLocal
from mythdata.models.figure import Figure

# Open a session (a DB “conversation”)
session = SessionLocal()

# Create a new Figure
new_figure = Figure(name="Zeus")

# Add it to the session
session.add(new_figure)

# Commit to save to the database
session.commit()

# Optional: print the new ID assigned by SQLite
print(f"Inserted Figure with ID: {new_figure.id}")

# Close the session
session.close()

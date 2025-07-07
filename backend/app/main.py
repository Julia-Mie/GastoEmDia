from fastapi import FastAPI
from app.routers import items
from app.database import engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(items.router)
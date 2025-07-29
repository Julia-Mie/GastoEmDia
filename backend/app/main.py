from fastapi import FastAPI
from app.routers import items
from app.database import engine, Base
from fastapi.middleware.cors import CORSMiddleware


Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(items.router)

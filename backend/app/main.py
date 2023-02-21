from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import Settings

app = FastAPI()
settings = Settings()

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allow_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.model import UserFinancialLife, FinancialWellnessScore
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


@app.post('/calculate-score/', responses={200: {}})
async def calculate_score(user_financial_life: UserFinancialLife) -> FinancialWellnessScore:
    return user_financial_life.result()

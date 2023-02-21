from enum import Enum

from pydantic import BaseModel
from pydantic.types import PositiveInt


class Category(Enum):
    LOW = 'low'
    MEDIUM = 'medium'
    HEALTHY = 'healthy'


CATEGORY_CLASSIFICATION = {
    Category.LOW: dict(status='Unhealthy', description='Caution!'),
    Category.MEDIUM: dict(status='Average', description='There is room for improvement.'),
    Category.HEALTHY: dict(status='Healthy', description='Congratulations!'),
}


class FinancialWellnessScore(BaseModel):
    score: Category
    status: str
    description: str


class UserFinancialLife(BaseModel):
    annual_income: PositiveInt
    monthly_costs: PositiveInt

    def _score_calculation(self) -> int:
        annual_cost = self.monthly_costs * 12
        return int((annual_cost * 100) / self.annual_income)

    @property
    def _score_result(self) -> Category:
        score = self._score_calculation()
        if score <= 25:
            return Category.HEALTHY

        if score <= 75:
            return Category.MEDIUM

        return Category.LOW

    def _category_classification(self, value: str) -> str:
        return CATEGORY_CLASSIFICATION.get(self._score_result, {}).get(value, '')

    def result(self) -> FinancialWellnessScore:
        return FinancialWellnessScore(
            score=self._score_result,
            status=self._category_classification('status'),
            description=self._category_classification('description'),
        )

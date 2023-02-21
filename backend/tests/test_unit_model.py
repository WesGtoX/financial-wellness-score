import unittest

from pydantic.error_wrappers import ValidationError

from app.model import Category, CATEGORY_CLASSIFICATION, FinancialWellnessScore, UserFinancialLife


class CategoryTestCase(unittest.TestCase):

    def test_category_enum(self) -> None:
        self.assertEqual('low', Category.LOW.value)
        self.assertEqual('medium', Category.MEDIUM.value)
        self.assertEqual('healthy', Category.HEALTHY.value)

    def test_category_classification_status(self) -> None:
        self.assertEqual('Unhealthy', CATEGORY_CLASSIFICATION[Category.LOW].get('status'))
        self.assertEqual('Average', CATEGORY_CLASSIFICATION[Category.MEDIUM].get('status'))
        self.assertEqual('Healthy', CATEGORY_CLASSIFICATION[Category.HEALTHY].get('status'))

    def test_category_classification_description(self) -> None:
        self.assertEqual('Caution!', CATEGORY_CLASSIFICATION[Category.LOW].get('description'))
        self.assertEqual('There is room for improvement.', CATEGORY_CLASSIFICATION[Category.MEDIUM].get('description'))
        self.assertEqual('Congratulations!', CATEGORY_CLASSIFICATION[Category.HEALTHY].get('description'))


class FinancialWellnessScoreTestCase(unittest.TestCase):

    def test_financial_wellness_score(self):
        fws = FinancialWellnessScore(score=Category.LOW, status='Unhealthy', description='Caution!')
        self.assertDictEqual(dict(score=Category.LOW, status='Unhealthy', description='Caution!'), fws.dict())

    def test_financial_wellness_score_validation_error(self):
        with self.assertRaises(ValidationError):
            FinancialWellnessScore(score=1, status='Unhealthy', description='Caution!')


class UserFinancialLifeTestCase(unittest.TestCase):

    def test_user_financial_life(self) -> None:
        ufl = UserFinancialLife(annual_income=1000, monthly_costs=10)
        self.assertDictEqual(dict(annual_income=1000, monthly_costs=10), ufl.dict())

    def test_user_financial_life_validation_error(self) -> None:
        with self.assertRaises(ValidationError):
            UserFinancialLife(annual_income=-1, monthly_costs=10)

        with self.assertRaises(ValidationError):
            UserFinancialLife(annual_income=1000, monthly_costs=-1)

        with self.assertRaises(ValidationError):
            UserFinancialLife(annual_income=0, monthly_costs=0)

    def test_score_calculation(self) -> None:
        ufl = UserFinancialLife(annual_income=1000, monthly_costs=10)
        self.assertEqual(12, ufl._score_calculation())

        ufl = UserFinancialLife(annual_income=1000, monthly_costs=30)
        self.assertEqual(36, ufl._score_calculation())

        ufl = UserFinancialLife(annual_income=1000, monthly_costs=63)
        self.assertEqual(75, ufl._score_calculation())

    def test_score_result(self) -> None:
        ufl = UserFinancialLife(annual_income=1250, monthly_costs=25)
        self.assertEqual(Category.HEALTHY, ufl._score_result)

        ufl = UserFinancialLife(annual_income=1250, monthly_costs=55)
        self.assertEqual(Category.MEDIUM, ufl._score_result)

        ufl = UserFinancialLife(annual_income=1250, monthly_costs=90)
        self.assertEqual(Category.LOW, ufl._score_result)

    def test_category_classification(self) -> None:
        ufl = UserFinancialLife(annual_income=72000, monthly_costs=7000)
        self.assertEqual('Unhealthy', ufl._category_classification('status'))
        self.assertEqual('Caution!', ufl._category_classification('description'))

        ufl = UserFinancialLife(annual_income=52000, monthly_costs=3150)
        self.assertEqual('Average', ufl._category_classification('status'))
        self.assertEqual('There is room for improvement.', ufl._category_classification('description'))

        ufl = UserFinancialLife(annual_income=100000, monthly_costs=1150)
        self.assertEqual('Healthy', ufl._category_classification('status'))
        self.assertEqual('Congratulations!', ufl._category_classification('description'))

    def test_result(self) -> None:
        ufl = UserFinancialLife(annual_income=100000, monthly_costs=1150)
        self.assertEqual('healthy', ufl.result().score.value)

        ufl = UserFinancialLife(annual_income=52000, monthly_costs=3150)
        self.assertEqual('medium', ufl.result().score.value)

        ufl = UserFinancialLife(annual_income=72000, monthly_costs=7000)
        self.assertEqual('low', ufl.result().score.value)

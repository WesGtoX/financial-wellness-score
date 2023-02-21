from fastapi.testclient import TestClient
from fastapi import status

from app.main import app

client = TestClient(app)


def test_calculate_score_http_422_unprocessable_entity():
    data = dict(annual_income=-1, monthly_costs=-10)
    response = client.post("/calculate-score/", headers={"Content-Type": "application/json"}, json=data)
    assert response.status_code == status.HTTP_422_UNPROCESSABLE_ENTITY


def test_calculate_score_healthy():
    data = dict(annual_income=1000, monthly_costs=10)
    response = client.post("/calculate-score/", headers={"Content-Type": "application/json"}, json=data)
    assert response.status_code == status.HTTP_200_OK

    result = response.json()
    assert result == dict(score='healthy', status='Healthy', description='Congratulations!')


def test_calculate_score_average():
    data = dict(annual_income=1000, monthly_costs=30)
    response = client.post("/calculate-score/", headers={"Content-Type": "application/json"}, json=data)
    assert response.status_code == status.HTTP_200_OK

    result = response.json()
    assert result == dict(score='medium', status='Average', description='There is room for improvement.')


def test_calculate_score_unhealthy():
    data = dict(annual_income=1000, monthly_costs=80)
    response = client.post("/calculate-score/", headers={"Content-Type": "application/json"}, json=data)
    assert response.status_code == status.HTTP_200_OK

    result = response.json()
    assert result == dict(score='low', status='Unhealthy', description='Caution!')

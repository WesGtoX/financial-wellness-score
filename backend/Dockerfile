FROM python:3.10.5-slim-buster

# set work directory
WORKDIR /app

# set env variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
COPY ./requirements-dev.txt /app/requirements-dev.txt

RUN pip install --upgrade pip && \
    pip install --no-cache-dir --upgrade -r /app/requirements-dev.txt

# copy project
COPY . /app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]

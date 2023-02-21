from pydantic import BaseSettings


class Settings(BaseSettings):
    allow_origins: list[str] = []

    class Config:
        env_file = '.env'

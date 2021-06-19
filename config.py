from os import getenv


class Config:
    SECRET_KEY = getenv("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = "sqlite:///database/database.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False

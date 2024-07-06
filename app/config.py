import os


class Config:
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://medbooker_dev:medbooker_dev_pwd@localhost/medbooker_dev_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.urandom(32).hex()

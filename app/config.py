import os


class Config:
    # MySQL database connection URI
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://medbooker_dev:medbooker_dev_pwd@localhost/medbooker_dev_db'

    # Disable SQLAlchemy modification tracking
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Secret key for JWT
    JWT_SECRET_KEY = os.urandom(24)

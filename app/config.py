import os

class Config:
    # MySQL database connection URI
    SQLALCHEMY_DATABASE_URI = ''

    # Disable SQLAlchemy modification tracking
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # Secret key for JWT
    JWT_SECRET_KEY = os.urandom(24)
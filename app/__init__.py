from flask import Flask
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from .config import Config
from .models import db
from flask_cors import CORS


bcrypt = Bcrypt()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app)

    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    migrate = Migrate(app, db)

    with app.app_context():
        # Import parts of our application
        from . import routes, auth, models

        # Register Blueprints
        from .auth import auth_bp
        from .routes import appointments_bp
        from .routes import api_bp

        app.register_blueprint(auth_bp, url_prefix='/auth')
        app.register_blueprint(appointments_bp, url_prefix='/appointments')
        app.register_blueprint(api_bp, url_prefix='/api')

        # Create the database tables if they don't exist
        db.create_all()

    return app
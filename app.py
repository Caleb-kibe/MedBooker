import os
from flask import Flask
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from app.config import Config
from app.models import db
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
        from app import routes, auth, models

        # Register Blueprints
        from app.auth import auth_bp
        from app.routes import appointments_bp
        from app.routes import api_bp

        app.register_blueprint(auth_bp, url_prefix='/auth')
        app.register_blueprint(appointments_bp, url_prefix='/appointments')
        app.register_blueprint(api_bp, url_prefix='/api')

        # Create the database tables if they don't exist
        db.create_all()

    return app

app = create_app()


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

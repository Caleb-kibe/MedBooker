from flask import Blueprint, request, jsonify
from app.models import db, User
from flask_jwt_extended import create_access_token, jwt_required, JWTManager

auth_bp = Blueprint('auth', __name__)
jwt = JWTManager()


@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    
    if User.query.filter_by(username=username).first():
        return jsonify({"msg": "Username already exists"}), 400
    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "Email already exists"}), 400

    new_user = User(username=username, email=email)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "User registered successfully"}), 201


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'Missing email or password'}), 400

    user = User.query.filter_by(email=email).first()

    if user and user.check_password(password):
        access_token = create_access_token(identity={'id': user.id, 'email': user.email, 'role': user.role})
        return jsonify({'access_token': access_token}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401


@auth_bp.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    # Logout logic if needed (invalidate tokens, etc.)
    return jsonify({"msg": "Logged out successfully"}), 200

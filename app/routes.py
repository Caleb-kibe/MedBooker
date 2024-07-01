from flask import request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, JWTManager
from flask_cors import CORS
from app import db, create_app
from app.models import User, Doctor, DoctorAvailability, Appointment

app = create_app()
CORS(app)
jwt = JWTManager(app)


@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    if not data or not data.get('username') or not data.get('email') or not data.get('password') or not data.get('role'):
        return jsonify({'message': 'Missing data'}), 400

    hashed_password = generate_password_hash(data['password'], method='sha256')
    new_user = User(username=data['username'], email=data['email'], password=hashed_password, role=data['role'])

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User registered successfully'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Registration failed', 'error': str(e)}), 500


@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or not data.get('username') or not data.get('password'):
        return jsonify({'message': 'Missing data'}), 400

    user = User.query.filter_by(username=data['username']).first()
    if user and check_password_hash(user.password, data['password']):
        token = create_access_token(identity={'username': user.username, 'role': user.role})
        return jsonify({'token': token})
    return jsonify({'message': 'Invalid credentials'}), 401


@app.route('/api/doctors', methods=['GET'])
def get_doctors():
    doctors = Doctor.query.all()
    return jsonify([doctor.to_dict() for doctor in doctors])


@app.route('/api/doctors/<int:id>', methods=['GET'])
def get_doctor(id):
    doctor = Doctor.query.get_or_404(id)
    return jsonify(doctor.to_dict())


@app.route('/api/appointments', methods=['POST'])
def book_appointment():
    data = request.get_json()
    new_appointment = Appointment(
        doctor_id=data['doctor_id'],
        patient_id=data['patient_id'],
        time=data['time']
    )
    db.session.add(new_appointment)
    db.session.commit()
    return jsonify({'message': 'Appointment booked successfully'})


@app.route('/api/doctor/availability', methods=['POST'])
def set_availability():
    data = request.get_json()
    new_availability = DoctorAvailability(
        doctor_id=data['doctor_id'],
        available_time=data['available_time']
    )
    db.session.add(new_availability)
    db.session.commit()
    return jsonify({'message': 'Availability set successfully'})

from flask import Blueprint, request, jsonify
from app.models import db, Appointment, DoctorAvailability, Doctor
from flask_jwt_extended import jwt_required, get_jwt_identity

appointments_bp = Blueprint('appointments', __name__)


@appointments_bp.route('/book', methods=['POST'])
@jwt_required()
def book_appointment():
    current_user_id = get_jwt_identity()
    data = request.get_json()
    doctor_id = data.get('doctor_id')
    appointment_time = data.get('appointment_time')

    availability = DoctorAvailability.query.filter_by(doctor_id=doctor_id, available_time=appointment_time).first()
    if not availability:
        return jsonify({"msg": "Doctor not available at the requested time"}), 400

    new_appointment = Appointment(user_id=current_user_id, doctor_id=doctor_id, appointment_time=appointment_time)
    db.session.add(new_appointment)
    db.session.commit()

    return jsonify({"msg": "Appointment booked successfully"}), 201



api_bp = Blueprint('api', __name__)


@api_bp.route('/register_doctor', methods=['POST'])
def register_doctor():
    data = request.json
    name = data.get('name')
    specialty = data.get('specialty')

    if not name or not specialty:
        return jsonify({'message': 'Name and specialty are required'}), 400

    new_doctor = Doctor(name=name, specialty=specialty)
    db.session.add(new_doctor)
    db.session.commit()

    return jsonify({'message': 'Doctor registered successfully!'}), 201


@api_bp.route('/doctors', methods=['GET'])
def get_doctors():
    doctors = Doctor.query.all()
    doctor_list = [{'id': doctor.id, 'name': doctor.name, 'specialty': doctor.specialty} for doctor in doctors]
    return jsonify(doctor_list), 200


@api_bp.route('/profile', methods=['GET'])
@jwt_required()
def get_profile():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if user:
        return jsonify({
            'id': user.id,
            'name': user.name,
            'email': user.email,
            # Add other user info if needed
        }), 200
    else:
        return jsonify({"msg": "User not found"}), 404

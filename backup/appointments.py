from flask import Blueprint, request, jsonify
from app.models import db, Appointment, DoctorAvailability
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

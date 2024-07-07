from flask import Blueprint, jsonify
from app.models import Doctor

doctors_bp = Blueprint('doctors', __name__)

@doctors_bp.route('/list', methods=['GET'])
def list_doctors():
    doctors = Doctor.query.all()
    doctor_list = [{
        'id': doctor.id,
        'name': doctor.name,
        'specialty': doctor.specialty
    } for doctor in doctors]
    return jsonify(doctor_list), 200

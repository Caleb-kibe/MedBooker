MedBooker App

MedBooker is a web application for booking medical appointments, featuring user authentication, role-based access for patients and doctors, and appointment management.

Features

- User registration and login
- Role-based access control
- Appointment booking and management
- JWT-based authentication

Technologies Used

- Backend: Flask, SQLAlchemy, Flask-JWT-Extended
- Frontend: React
- Database: MySQL (development), PostgreSQL (production)

Getting Started

Prerequisites

- Python 3.8+
- Node.js and npm

Backend Setup

1. Clone the Repository
   ```sh
   git clone https://github.com/yourusername/MedBooker.git
   cd medbooker
   ```

2. Set Up Virtual Environment
   ```sh
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install Dependencies
   ```sh
   pip3 install -r requirements.txt
   ```

4. Configure Environment Variables
   Create a `.env` file in the project root:
   ```
   FLASK_APP=run.py
   FLASK_ENV=development
   JWT_SECRET_KEY=your_jwt_secret_key
   ```

5. Initialize Database
   ```sh
   flask db init
   flask db migrate -m "Initial migration."
   flask db upgrade
   ```

6. Run the Backend Server
   ```sh
   flask run
   python 3 run.py
   ```

Frontend Setup

1. Navigate to the Frontend Directory
   ```sh
   cd medbooker-frontend
   ```

2. Install Dependencies
   ```sh
   npm install
   ```

3. Start the Frontend Server
   ```sh
   npm start
   ```

 API Endpoints

 User Authentication

 Register: `POST /api/register`
 Login: `POST /api/login`

 Appointments

 Book Appointment: `POST /api/appointments`
 Get Appointments: `GET /api/appointments`

 Deployment

 Deploy to Heroku

1. Create a Heroku App
   ```sh
   heroku create medbooker
   ```

2. Push to Heroku
   ```sh
   git push heroku main
   ```

3. Set Environment Variables on Heroku
   ```sh
   heroku config:set FLASK_APP=run.py FLASK_ENV=production JWT_SECRET_KEY=your_jwt_secret_key
   ```

4. Initialize the Database on Heroku
   ```sh
   heroku run flask db upgrade
   ```

License

This project is licensed under the MIT License.

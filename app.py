import os
from app.create import create_app

app = create_app()

@app.route('/')
def home():
    return "Welcome to MedBooker!"


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

from app import create_app


app = create_app()


@app.route('/')
def display_message():
    return "<h3>Welcome to MedBooker<br/>Updates coming soon.<h3/>"

if __name__ == '__main__':
    app.run(debug=True)

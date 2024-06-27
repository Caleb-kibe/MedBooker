from app import create_app


app = create_app()


@app.route('/')
def display_message():
    return "Hello, World!<br/>Updates coming soon."

if __name__ == '__main__':
    app.run(debug=True)

from flask import jsonify

from backend.run import app


@app.route('/')
def index():
    return jsonify({'message': 'Hello World!'})

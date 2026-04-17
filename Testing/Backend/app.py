from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/student", methods=["POST"])
def create_student():
    data = request.get_json()

    if not data.get("name"):
        return jsonify({"error": "Name required"}), 400

    return jsonify({"message": "Student created"}), 201
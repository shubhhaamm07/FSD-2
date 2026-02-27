# 🚀 REST API Lab - Flask Backend

A simple REST API built using **Flask**.  
This project demonstrates modular routing, REST principles, and production deployment using **Gunicorn**.

---

## 📌 Project Overview

This backend application provides RESTful APIs for managing student data.  
It is structured using Flask best practices and is deployment-ready for platforms like **Render**.

---

## 🛠️ Tech Stack

- Python 3
- Flask
- Gunicorn (Production Server)
- REST API Architecture

---

## 📂 Project Structure

```
rest-api-lab/
│
├── app.py
├── run.py
├── requirements.txt
├── routes/
│   ├── __init__.py
│   └── student_routes.py
└── README.md
```

---

## ⚙️ Local Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone <your-repository-link>
cd Backend/rest-api-lab
```

---

### 2️⃣ Create Virtual Environment

```bash
python3 -m venv virenv
source virenv/bin/activate   # Mac/Linux
```

---

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

### 4️⃣ Run the Application

```bash
python app.py
```

OR

```bash
python run.py
```

The server will start at:

```
http://127.0.0.1:5000
```

---

## 🌍 Production Deployment (Render)

### 🔹 Build Command

```
pip install -r requirements.txt
```

### 🔹 Start Command

```
gunicorn app:app
```

> Format: `gunicorn filename:flask_variable`

---

## 📌 API Endpoints

Example endpoints:

```
GET     /students
POST    /students
GET     /students/<id>
PUT     /students/<id>
DELETE  /students/<id>
```

---

## 🔐 Dynamic Port Configuration

Ensure your `app.py` contains:

```python
import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
```

This allows deployment platforms like Render to assign a dynamic port.

---

## 🚀 Live Deployment

After deployment on Render, your API will be available at:

```
https://your-service-name.onrender.com
```

---

## 👨‍💻 Author

**Shubham Rana**  
Chandigarh University  
Full Stack Development Lab

---

## 📜 License

This project is developed for educational and academic purposes.

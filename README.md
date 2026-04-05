# 🚀 AdApp – Full Stack Web Application (React + Node.js)

## 📌 Overview

AdApp is a simple full-stack web application built using **React (frontend)** and **Node.js (backend)**.
It demonstrates how a frontend communicates with a backend API over HTTP in a distributed environment.

---

## 🏗️ Architecture

Frontend (React)
↓
Nginx (Reverse Proxy - VM1)
↓
Backend API (Node.js - VM2)

---

## ⚙️ Tech Stack

* **Frontend:** React.js
* **Backend:** Node.js (Express)
* **Web Server:** Nginx
* **Deployment:** Azure Virtual Machines
* **Networking:** Private IP communication between VMs

---

## 📂 Project Structure

```
adapp/
 ├── frontend/
 │    ├── src/
 │    ├── public/
 │    ├── package.json
 │
 ├── backend/
 │    ├── app.js
 │    ├── package.json
```

---

## 🚀 Getting Started (Local Setup)

### 🔹 1. Clone Repository

```
git clone https://github.com/aamit1512-dotcom/adapp.git
cd adapp
```

---

### 🔹 2. Run Backend

```
cd backend
npm install
node app.js
```

👉 Backend runs on:

```
http://localhost:8080
```

---

### 🔹 3. Run Frontend

```
cd frontend
npm install
npm start
```

👉 Frontend runs on:

```
http://localhost:3000
```

---

## 🌐 API Endpoints

### 🔹 Get Data

```
GET /api/data
```

### ✅ Response

```
{
  "message": "Hello from backend"
}
```

---

## ❤️ Health Check Endpoint

```
GET /health
```

---

## ☁️ Deployment (Azure)

* **VM1:** Hosts React app using Nginx
* **VM2:** Runs Node.js backend
* **Application Gateway:** Routes external traffic
* **NSG Rules:** Control access between tiers

---

## 🔥 Key Features

* Full-stack integration (React + Node.js)
* REST API communication
* Reverse proxy using Nginx
* Private backend communication (secure)
* Deployed on Azure infrastructure

---

## 📸 Access Application

```
http://<APP_GATEWAY_PUBLIC_IP>
```

---

## 🧠 Learning Highlights

* Frontend-backend integration
* API design using Express
* Azure VM communication using private IP
* Debugging real-world issues (502, NSG, ports)
* Nginx reverse proxy configuration

---

## 👨‍💻 Author

**Amit Kumar**

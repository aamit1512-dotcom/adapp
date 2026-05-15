# 🚀 AdApp – Full Stack Web Application (React + Node.js)

## 📌 Project Overview

AdApp is a full-stack web application built using React.js for the frontend and Node.js (Express) for the backend.

The project demonstrates frontend-backend communication in a distributed Azure environment using Nginx as a reverse proxy and private network communication between application tiers.

---

# 🏗️ Architecture

```text
User Browser
      │
      ▼
Nginx Reverse Proxy (Frontend VM)
      │
      ▼
Backend API (Node.js VM - Private IP)
```

---

# ⚙️ Tech Stack

| Component | Technology |
|---|---|
| Frontend | React.js |
| Backend | Node.js / Express |
| Reverse Proxy | Nginx |
| Cloud Platform | Microsoft Azure |
| Hosting | Azure Virtual Machines |
| Networking | Private IP Communication |
| Infrastructure | Terraform (separate IaC repository) |

---

# 📂 Project Structure

```text
adapp/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app.js
│   └── package.json
```

---

# 🚀 Local Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/aamit1512-dotcom/adapp.git
cd adapp
```

---

## 2️⃣ Start Backend

```bash
cd backend
npm install
node app.js
```

Backend runs on:

```text
http://localhost:8080
```

---

## 3️⃣ Start Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# 🌐 API Endpoints

## GET /api/data

Returns application response from backend API.

### Sample Response

```json
{
  "message": "Hello from backend"
}
```

---

# ❤️ Health Check Endpoint

```text
GET /health
```

Used for application availability verification.

---

# ☁️ Azure Deployment

- Frontend application hosted on Azure VM using Nginx
- Backend API deployed on separate Azure VM
- Backend communication configured using private IP access
- Azure Application Gateway used for external traffic routing
- NSG rules configured for controlled inter-tier communication

---

# 🔥 Key Features

- Full-stack React + Node.js application
- Reverse proxy configuration using Nginx
- Secure backend communication over private networking
- Azure VM-based deployment architecture
- REST API integration
- Application health check endpoint

---

# 🧠 Learning Highlights

This project helped in understanding:

- Frontend and backend integration
- Nginx reverse proxy configuration
- Azure VM communication using private IPs
- Basic application deployment architecture
- Network Security Group (NSG) configuration
- Troubleshooting deployment and connectivity issues

---

# 🔗 Related Infrastructure Repository

Terraform infrastructure repository:

https://github.com/aamit1512-dotcom/webapp-iac

---

# 👨‍💻 Author

Amit Kumar

DevOps Engineer | Azure | Terraform | Docker | Kubernetes

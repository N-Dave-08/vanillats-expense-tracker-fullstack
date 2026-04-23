# 💰 Budget Tracker (Vanilla TypeScript + Node.js + PostgreSQL)

A simple full-stack budget tracking application built using **Vanilla TypeScript (MVC architecture)** on the frontend and a **Node.js backend with PostgreSQL** for data persistence.

---

## 🚀 Tech Stack

### Frontend

- Vanilla TypeScript
- MVC architecture
- HTML / CSS

### Backend

- Node.js
- TypeScript
- Native HTTP module (no framework)

### Database

- PostgreSQL

---

## 📁 Project Structure

```text
budget-tracker/
├── frontend/
│   ├── src/
│   │   ├── controller/
│   │   ├── model/
│   │   ├── view/
│   │   └── app.ts
│   ├── dist/
│   └── index.html
├── backend/
│   ├── src/
│   │   ├── db/
│   │   └── server.ts
│   ├── dist/
│   └── tsconfig.json
└── database.sql
```

---

## ⚙️ Features

- Add income and expense transactions
- View all transactions
- Compute real-time balance
- Persistent storage using PostgreSQL
- REST-like API (GET, POST)

---

## 🗄️ Database Schema

```sql
CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  type VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🔌 API Endpoints

### GET /transactions

Response:

```json
[
  {
    "id": 1,
    "description": "Salary",
    "amount": 10000,
    "type": "income"
  }
]
```

### POST /transactions

Request body:

```json
{
  "description": "Groceries",
  "amount": 500,
  "type": "expense"
}
```

Response:

```json
{
  "id": 2,
  "description": "Groceries",
  "amount": "500",
  "type": "expense"
}
```

---

## 🧠 Architecture (MVC Pattern)

### Model

- Handles API communication
- Fetch transactions
- Add transactions

### View

- Handles UI rendering
- Display transaction list
- Display balance

### Controller

- Handles logic
- Form submission
- Data flow between Model and View

---

## 🔄 Data Flow

```text
User Input
   ↓
Controller
   ↓
Model (API request)
   ↓
Backend (Node.js)
   ↓
PostgreSQL
   ↓
Response
   ↓
View updates UI
```

---

## ▶️ How to Run the Project

1. Start PostgreSQL

   Make sure your database is running.

2. Start Backend

```bash
cd backend
npm install
npx tsc -w
node dist/server.js
```

Backend runs on:

`http://localhost:5000`

3. Start Frontend

```bash
cd frontend
npx tsc -w
```

Then open `index.html` or use a local server:

```bash
npx serve frontend
```

---

## 🧪 Testing

Use Postman or another API client:

- `GET http://localhost:5000/transactions`
- `POST http://localhost:5000/transactions`

---

## ⚠️ Known Issues / Notes

- Requires CORS enabled in backend
- Must use `type="module"` in frontend script tag
- Frontend must be served (not opened directly in some browsers)

---

## 📌 Future Improvements

- Add DELETE / UPDATE transactions
- Add authentication (login system)
- Add categories for expenses
- Add charts (analytics dashboard)
- Improve UI design

---

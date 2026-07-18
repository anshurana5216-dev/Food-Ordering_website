#  Food Ordering Website

A full-stack Food Ordering Website built using React, Node.js, Express, MongoDB, and Firebase Authentication.

##  Features

- User Authentication (Signup/Login)
- Browse Food Items
- Search Food Items
- Add to Cart
- Order Placement
- Order Tracking
- Admin Dashboard
- Restaurant Management
- Responsive UI
- Firebase Authentication
- MongoDB Database

##  Tech Stack

### Frontend
- React.js
- Vite
- React Router
- CSS
- Firebase Authentication

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

##  Project Structure

```bash
foodorderingsite/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── doggle/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/anshurana5216-dev/Food-Ordering_website.git
```

```bash
cd Food-Ordering_website
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run Backend

```bash
npm start
```

Backend runs on:

```bash
http://localhost:5000
```

---

## Frontend Setup

```bash
cd doggle
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

##  Deployment

### Frontend
- Vercel

### Backend
- Render

### Database
- MongoDB Atlas




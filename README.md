# PrimeTrade Backend Assignment

This project is a simple full-stack application built as part of a **Backend Developer Intern assignment**.  
The main focus of the project is to demonstrate **secure backend API design**, **authentication**, **role-based access**, and **CRUD operations**, along with a **basic frontend UI** to interact with the APIs.

The frontend is intentionally kept minimal and is only used to test and demonstrate backend functionality.

### 🧠 Scalability Overview
The application follows a modular backend structure, making it easy to scale and extend.  
JWT-based authentication is stateless, which allows the application to scale horizontally behind a load balancer.  
In the future, the system can be split into separate microservices (for example, authentication and task services).  
Performance can be improved by adding Redis caching for frequently accessed data, and the application can be containerized using Docker and deployed using NGINX for better scalability and reliability.

## 📘 API Documentation

API documentation is provided using a Postman collection.

### How to use:
1. Open Postman
2. Click **Import**
3. Import the file:
  docs/PrimeTrade.postman_collection.json
4. Use the Login API to generate a JWT token
5. All protected APIs use the token via Authorization header

The collection includes request examples for authentication and task CRUD APIs.


## ✨ Features

### Authentication & Authorization
- User registration with hashed passwords (bcrypt)
- User login using JWT authentication
- Role-based access control (`user` and `admin`)
- Protected routes using JWT middleware

### Task Management (CRUD)
- Create a task
- Get all tasks for the logged-in user
- Get a single task
- Update a task
- Delete a task
- Ownership-based access (users can only access their own tasks)

### Frontend
- Built with React (Vite)
- Login and Register pages
- JWT stored on login and used for protected APIs
- Simple task dashboard
- Logout functionality
- Clean and centered UI

### API Documentation
- APIs documented using a Postman collection
- JWT token handled using Postman collection variables

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT (jsonwebtoken)
- bcrypt

### Frontend
- React (Vite)
- Axios
- Plain CSS

---

## 📁 Project Structure


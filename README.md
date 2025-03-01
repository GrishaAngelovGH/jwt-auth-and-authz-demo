# **JWT Authentication and Authorization Application**

This project is a full-stack implementation of a secure system for both **authentication** and **authorization** using JWT (JSON Web Tokens). The application is divided into two parts:
1. **Backend (Server)**: Built with Node.js, Express, and JWT for handling authentication and securing APIs.
2. **Frontend (Client)**: Developed with React to provide a interface for login and secure access to protected routes.

---

## **Features**
- **Authentication**: Verifies user identity through email and password validation. Issues a JWT token on successful login.
- **Authorization**: Protects private routes and endpoints by verifying the validity of the user's JWT token.
- Token expiration management to ensure valid sessions.

---

### **API Endpoints**

| Endpoint      | Method | Description                                 | Protected |
|---------------|--------|---------------------------------------------|-----------|
| `/login`      | POST   | Authenticates user and provides a JWT token | No        |
| `/action`     | GET    | Protected action    (requires token)        | Yes       |

---

### **Usage**

- Navigate to `http://localhost:5173` to access the login page.
- Enter the following credentials to log in:
  - **Email**: `user@example.com`
  - **Password**: `password123`
- Upon successful login, a JWT token is stored in the browser's `localStorage`.
- Access protected pages and perform action.

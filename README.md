# U-Manager - A User Management Application

This is a User Management Application built with Next.js and NextAuth.js. It provides features for user authentication, tenant management, role-based access control (RBAC), forgot password, and reset password functionality.

## Features

1. **User Authentication**
   - User registration with email verification
   - User login with email and password
   - User logout

2. **Tenant Management**
   - Associate users with specific tenants or organizations
   - Create, edit, and delete tenants (admin only)


3. **Role-Based Access Control (RBAC)**
   - Define roles with different access levels
   - Assign roles to users within a tenant
   - Restrict access to certain parts of the application based on user roles and permissions


4. **Forgot Password**
   - Request a password reset link via email
   - Secure token generation and validation for password reset

5. **Reset Password**
   - Reset password after clicking the reset link
   - Secure and user-friendly password reset process

## Technical Requirements

- Next.js for building the application's frontend
- NextAuth.js for handling authentication and session management
- Database (PostgreSQL) to store user information, tenants, roles, and permissions
- Serverless functions or API routes in Next.js for backend logic
- Proper validation and error handling
- Responsive design for desktop and mobile devices
- Deployment to a hosting platform (e.g., Vercel, Netlify, Heroku)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- A database management system (PostgreSQL) set up and running

### Installation

1. Clone the repository:`git clone https://github.com/your-repo/user-management-app.git`
2. Navigate to the project directory: `cd user-management-app`
3. Install dependencies: `npm install`
4. Configure the environment variables by creating a `.env` file in the project root directory. Refer to the `.env.example` file for the required variables.
5. Start the development server:
   `npm run dev`
The application should now be running at `http://localhost:3000`.





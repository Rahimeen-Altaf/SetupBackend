# User Management Backend API

A simple backend REST API for user management, built with Node.js, Express.js, PostgreSQL, and Sequelize ORM.

## Features
- Connects to PostgreSQL using Sequelize ORM
- User model with fields: name, email, password, role, isActive
- Full CRUD API: Create, Read, Update, Delete users
- Clean, modular code structure
- Ready for Postman testing

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- PostgreSQL (running locally or remotely)

### Setup
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables:**
   - Make `.env` file with values as:
     ```env
     DB_NAME=db_name
     DB_USER=postgres
     DB_PASSWORD=postgres
     DB_HOST=localhost
     DB_PORT=5432
     PORT=3000
     ```
4. **Create the database table:**
   - In your PostgreSQL client (e.g., pgAdmin), run:
     ```sql
     CREATE TABLE usertbl (
       id SERIAL PRIMARY KEY,
       name VARCHAR(100) NOT NULL,
       email VARCHAR(255) NOT NULL UNIQUE,
       password VARCHAR(100) NOT NULL,
       role VARCHAR(10) DEFAULT 'user' CHECK (role IN ('user', 'admin')),
       "isActive" BOOLEAN DEFAULT TRUE,
       "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
       "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
     );
     ```

5. **Start the server:**
   ```bash
   npm run dev
   # or
   node app.js
   ```

## API Endpoints

### Create User
- **POST** `/api/users`
- **Body (JSON):**
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string",
    "role": "user",
    "isActive": true
  }
  ```

### Get All Users
- **GET** `/api/users`

### Get User by ID
- **GET** `/api/users/:id`

### Update User
- **PUT** `/api/users/:id`
- **Body (JSON):**
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "newpassword",
    "role": "admin",
    "isActive": false
  }
  ```

### Delete User
- **DELETE** `/api/users/:id`

## Testing with Postman
- Use the above endpoints and example JSON bodies.
- Set `Content-Type: application/json` in headers.
- Make sure to select `raw` and `JSON` in the Postman body tab.

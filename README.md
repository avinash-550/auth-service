# Authentication Service

A Spring Boot-based microservice providing essential authentication functionalities.



## Features

- **User Signup**: Register users with secure password hashing.
- **User Login**: Authenticate users and issue JWT access tokens.
- **Refresh Tokens**: Allow users to renew expired tokens securely.
- **Spring Security Integration**: Protect endpoints with role-based access control.
- **Database Integration**: Store user credentials securely in a relational database.



## Requirements

- **Java 17**
- **Spring Boot 3.xx**
- **Maven** (for project build)
- **MySQL** 



## Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/authentication-service.git
cd auth
```
### 2. Build and Run the Docker-Compose file

```bash
docker-compose up --build
```

### 3. Run the Spring boot Application
```bash
mvn spring-boot:run
```

## Usage


### Accessing UI
Open [index.html](frontend/index.html) in your favorite browser.

## API Design

### **Signup Endpoint**
- **Method**: `POST`
- **URL**: `/api/auth/signup`
- **Request Body**:
  ```json
  {
    "username": "testuser",
    "password": "securepassword",
    "email": "user@example.com"
  }
  ```


- **Response**:
  ```json
  {
    "message": "User registered successfully."
  }
  ```
### **Login Endpoint**
- **Method**: `POST`
- **URL**: `/api/auth/login`
- **Request Body**:
  ```json
  {
    "username": "testuser",
    "password": "securepassword"
  }
  ```

- **Response**:
  ```json
    {
    "accessToken": "jwt-access-token",
    "refreshToken": "jwt-refresh-token"
    }
  ```

### **Refresh Token Endpoint**
- **Method**: `POST`
- **URL**: `/api/auth/refresh`
- **Request Body**:
  ```json
  {
    "refreshToken": "jwt-refresh-token"
  }
  ```

- **Response**:
  ```json
    {
    "accessToken": "new-jwt-access-token"
    }
  ```


## Configuration

Set up the following variables in your `application.properties` file or as environment variables:

| Property                  | Default Value                        | Description                               |
|---------------------------|--------------------------------------|-------------------------------------------|
| `spring.datasource.url`   | `jdbc:postgresql://localhost:5432/authdb` | Database URL                              |
| `spring.datasource.username` | `postgres`                          | Database username                         |
| `spring.datasource.password` | `password`                          | Database password                         |
| `jwt.secret`              | `your-secret-key`                   | Secret key for JWT signing                |
| `jwt.expiration`          | `3600`                              | Access token expiration time in seconds   |

## How It Works

1. **Signup**:  
   Users register with a username, email, and password. Passwords are securely hashed using BCrypt before being stored in the database.

2. **Login**:  
   Users authenticate using their credentials. Upon successful authentication, a JWT access token and a refresh token are generated and returned.

3. **Access Token**:  
   Protects API endpoints by requiring a valid JWT token in the `Authorization` header of requests.

4. **Refresh Token**:  
   Allows users to request a new access token without needing to log in again, ensuring seamless user sessions.


## Future Enhancements

- **Email Verification**: Add email verification during the signup process to enhance account security.
- **Roles and Permissions**: Implement role-based access control for fine-grained authorization.
- **OAuth2 Integration**: Support third-party authentication providers like Google, Facebook, etc.
- **Dockerization**: Package the application into a Docker container for easier deployment.
- **Logging and Monitoring**: Integrate centralized logging and monitoring tools for better observability.
- **Password Recovery**: Add a password recovery feature to help users reset forgotten passwords.
- **Rate Limiting**: Implement rate limiting to prevent abuse of authentication endpoints.

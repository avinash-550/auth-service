# Token-Based Authentication Service
A Spring Boot-based microservice providing token based authentication functionalities.


## Features

- **User Signup**: Register users with secure password hashing.
- **User Login**: Authenticate users and issue JWT access tokens.
- **Database Integration**: Store user credentials securely in a relational database.

## Working Demo
<div >
  <img src="artifacts/auth_demo.gif" width="700" />
</div>

## Architecture
![Architecture Diagram](artifacts/architecture.png)


[Architecture Edit Link](https://drive.google.com/file/d/1yVSM8zGEvzjBebzTH37iipqzIpmyStho/view?usp=drive_link)


## Requirements
- **Java 17**
- **Spring Boot 3.xx**
- **Maven** (for project build)
- **MySQL** 
- **Docker**



## Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/authentication-service.git
```
### 2. Build and Run the Docker-Compose file

```bash
docker-compose up --build
```

### 3. Run the Spring boot Application
```bash
cd auth
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
    "username": "user3",
    "password": "securepassword"
  }
  ```


- **Response**:
  ```string
  User registered successfully!
  ```
### **Login Endpoint**
- **Method**: `POST`
- **URL**: `/api/auth/login`
- **Request Body**:
  ```json
  {
    "username": "user3",
    "password": "securepassword"
  }
  ```

- **Response**:
  ```string
  eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMyIsImlhdCI6MTczNjA3ODU0OCwiZXhwIjoxNzM2MDgyMTQ4fQ.CD98d3u6cHoH4qMO9iA1TBPaEXsAGOtTUg6ivVwKaV0
  ```

### **Example Authenticated Endpoint**
- **Method**: `GET`
- **URL**: `/example`
- **AUTHORIZATION**: Bearer `<access_token>`

- **Response**:
  ```json
  {
      "msg": "Successfully authenticated!",
      "username": "user3"
  }
  ```


## Configuration

Set up the following variables in your `application.properties` file or as environment variables:

| Property                  | Default Value                        | Description                               |
|---------------------------|--------------------------------------|-------------------------------------------|
| `JWT_SECRET`   | `ddf54c3abf2eb29ffd34cd48c2b2ddf54c3abf2eb29ffd34c966` | Secret key for JWT signing                |
| `JWT_TTL` | `360000`                          | Access token expiration time in milliseconds   

## How It Works

1. **Signup**:  
   Users register with a username and password. Passwords are securely hashed using BCrypt before being stored in the database.

2. **Login**:  
   Users authenticate using their credentials. Upon successful authentication, a JWT access token and a refresh token are generated and returned.

3. **Access Token**:  
   Protects API endpoints by requiring a valid JWT token in the `Authorization` header of requests.

## Todo
 - Add contract tests
 - Package the application into a Docker container for easier deployment.
 - Implement role-based access control for fine-grained authorization.

## Future Enhancements

- **Email Verification**: Add email verification during the signup process to enhance account security.
- **OAuth2 Integration**: Support third-party authentication providers like Google, Facebook, etc.
- **Refresh Tokens**: Implement refresh tokens for obtaining new access tokens when the existing ones expire.


## References
- https://blog.openreplay.com/jwt-authentication-best-practices/
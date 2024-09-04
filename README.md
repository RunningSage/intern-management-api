# Intern Management REST API

## Overview

This RESTful API is designed for managing interns within an organization. It provides functionality for handling intern records, tracking performance, assigning tasks, and managing feedback.

## Features

- **Intern Management**: Create, read, update, and delete intern records.
- **Performance Management**: Add, retrieve, update, and delete performance records for interns.
- **Task Management**: Assign, retrieve, update, and delete tasks for interns.
- **Feedback Management**: Add, retrieve, update, and delete feedback for interns.

## API Endpoints

### Intern Management

#### Create Intern
- **Endpoint:** `POST /api/v1/interns`
- **Request Body:**
    ```json
    {
      "name": "string",
      "contact_info": "string",
      "department": "string",
      "start_date": "YYYY-MM-DD",
      "end_date": "YYYY-MM-DD"
    }
    ```
- **Response:**
    ```json
    {
      "id": "string",
      "name": "string",
      "contact_info": "string",
      "department": "string",
      "start_date": "YYYY-MM-DD",
      "end_date": "YYYY-MM-DD"
    }
    ```

#### Retrieve Intern
- **Endpoint:** `GET /api/v1/interns/:id`
- **Query Parameters:** Optional filters (e.g., `department`, `status`)
- **Response:**
    ```json
    {
      "id": "string",
      "name": "string",
      "contact_info": "string",
      "department": "string",
      "start_date": "YYYY-MM-DD",
      "end_date": "YYYY-MM-DD"
    }
    ```
- **Response (List):**
    ```json
    [
      {
        "id": "string",
        "name": "string",
        "contact_info": "string",
        "department": "string",
        "start_date": "YYYY-MM-DD",
        "end_date": "YYYY-MM-DD"
      }
    ]
    ```

#### Update Intern
- **Endpoint:** `PUT /api/v1/interns/:id`
- **Request Body:**
    ```json
    {
      "name": "string",
      "contact_info": "string",
      "department": "string",
      "status": "string"
    }
    ```
- **Response:**
    ```json
    {
      "id": "string",
      "name": "string",
      "contact_info": "string",
      "department": "string",
      "status": "string"
    }
    ```

#### Delete Intern
- **Endpoint:** `DELETE /api/v1/interns/:id`
- **Response:**
    ```json
    {
      "message": "Intern deleted successfully"
    }
    ```

### Performance Management

#### Add Performance Record
- **Endpoint:** `POST /api/v1/interns/:id/performance`
- **Request Body:**
    ```json
    {
      "metrics": "string",
      "review": "string"
    }
    ```
- **Response:**
    ```json
    {
      "id": "string",
      "metrics": "string",
      "review": "string"
    }
    ```

#### Retrieve Performance Records
- **Endpoint:** `GET /api/v1/interns/:id/performance`
- **Response:**
    ```json
    [
      {
        "id": "string",
        "metrics": "string",
        "review": "string"
      }
    ]
    ```

#### Update Performance Record
- **Endpoint:** `PUT /api/v1/interns/:id/performance/:record_id`
- **Request Body:**
    ```json
    {
      "metrics": "string",
      "review": "string"
    }
    ```
- **Response:**
    ```json
    {
      "id": "string",
      "metrics": "string",
      "review": "string"
    }
    ```

#### Delete Performance Record
- **Endpoint:** `DELETE /api/v1/interns/:id/performance/:record_id`
- **Response:**
    ```json
    {
      "message": "Performance record deleted successfully"
    }
    ```

### Task Management

#### Assign Task
- **Endpoint:** `POST /api/v1/interns/:id/tasks`
- **Request Body:**
    ```json
    {
      "description": "string",
      "due_date": "YYYY-MM-DD",
      "priority": "string"
    }
    ```
- **Response:**
    ```json
    {
      "id": "string",
      "description": "string",
      "due_date": "YYYY-MM-DD",
      "priority": "string"
    }
    ```

#### Retrieve Tasks
- **Endpoint:** `GET /api/v1/interns/:id/tasks`
- **Response:**
    ```json
    [
      {
        "id": "string",
        "description": "string",
        "due_date": "YYYY-MM-DD",
        "priority": "string"
      }
    ]
    ```

#### Update Task
- **Endpoint:** `PUT /api/v1/interns/:id/tasks/:task_id`
- **Request Body:**
    ```json
    {
      "description": "string",
      "due_date": "YYYY-MM-DD",
      "priority": "string",
      "status": "string"
    }
    ```
- **Response:**
    ```json
    {
      "id": "string",
      "description": "string",
      "due_date": "YYYY-MM-DD",
      "priority": "string",
      "status": "string"
    }
    ```

#### Delete Task
- **Endpoint:** `DELETE /api/v1/interns/:id/tasks/:task_id`
- **Response:**
    ```json
    {
      "message": "Task deleted successfully"
    }
    ```

### Feedback Management

#### Add Feedback
- **Endpoint:** `POST /api/v1/interns/:id/feedback`
- **Request Body:**
    ```json
    {
      "feedback": "string"
    }
    ```
- **Response:**
    ```json
    {
      "id": "string",
      "feedback": "string"
    }
    ```

#### Retrieve Feedback
- **Endpoint:** `GET /api/v1/interns/:id/feedback`
- **Response:**
    ```json
    [
      {
        "id": "string",
        "feedback": "string"
      }
    ]
    ```

#### Update Feedback
- **Endpoint:** `PUT /api/v1/interns/:id/feedback/:feedback_id`
- **Request Body:**
    ```json
    {
      "feedback": "string"
    }
    ```
- **Response:**
    ```json
    {
      "id": "string",
      "feedback": "string"
    }
    ```

#### Delete Feedback
- **Endpoint:** `DELETE /api/v1/interns/:id/feedback/:feedback_id`
- **Response:**
    ```json
    {
      "message": "Feedback deleted successfully"
    }
    ```

## Environment Variables

Ensure the following environment variables are set in your `.env` file:

```env
PORT=5000
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret_key>
DB_PASSWORD=<your_db_password>
JWT_EXPIRES_IN=1h
NODE_ENV=development

```

Replace `<your_mongo_uri>`, `<your_jwt_secret_key>`, and `<your_db_password>` with your actual MongoDB URI, JWT secret key, and database password.

## Setup

1. **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2. **Navigate to the project directory:**

    ```bash
    cd <project_directory>
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Create a `.env` file in the root directory and add your environment variables.**

5. **Start the server:**

    ```bash
    npm start
    ```

## Testing

Use Postman for testing the API endpoints. Import the provided Postman collection to explore and test all available endpoints.

## Documentation

API documentation is provided via Postman. You can view the detailed API documentation [here](https://documenter.getpostman.com/view/38127552/2sAXjPzpPH).
```

This version should fit your `README.md` format. Adjust `<repository_url>` and `<project_directory>` with your actual values.
# Intern Management REST API

## Overview

This RESTful API is designed for managing interns within an organization. It provides functionality for handling intern records, tracking performance, assigning tasks, and managing feedback.

## Features

- **Intern Management**: Create, read, update, and delete intern records.
- **Performance Management**: Add, retrieve, update, and delete performance records for interns.
- **Task Management**: Assign, retrieve, update, and delete tasks for interns.
- **Feedback Management**: Add, retrieve, update, and delete feedback for interns.

## API Endpoints

### Auth

#### POST /api/v1/auth/signup

**Description**: Register a new user with the provided email, password, and role.

**Request Body**:
```json
{
  "email": "string",
  "password": "string",
  "role": "string"
}
```

**Response**:
```json
{
  "userId": "string",
  "token": "string"
}
```

#### POST /api/v1/auth/login

**Description**: Authenticate and log in a user.

**Request Body**:
```json
{
  "email": "string",
  "password": "string"
}
```

**Response**:
```json
{
  "token": "string"
}
```

---

### Interns

#### POST /api/v1/interns

**Description**: Create a new intern record.

**Request Body**:
```json
{
  "name": "string",
  "contactInfo": "string",
  "department": "string",
  "startDate": "string",
  "endDate": "string"
}
```

**Response**:
```json
{
  "id": "string",
  "name": "string",
  "contactInfo": "string",
  "department": "string",
  "startDate": "string",
  "endDate": "string"
}
```

#### GET /api/v1/interns

**Description**: Retrieve a list of interns.

**Query Parameters**:
- `department` (optional, string): Filter by department.
- `status` (optional, string): Filter by status.
- `sortBy` (optional, string): Sort by a specific field.
- `order` (optional, string): Order of sorting (asc/desc).
- `page` (optional, integer): Page number.
- `limit` (optional, integer): Number of results per page.

**Response**:
```json
{
  "interns": [
    {
      "id": "string",
      "name": "string",
      "contactInfo": "string",
      "department": "string",
      "startDate": "string",
      "endDate": "string"
    }
  ]
}
```

#### GET /api/v1/interns/:id

**Description**: Retrieve information about a specific intern.

**Response**:
```json
{
  "internId": "string",
  "name": "string",
  "contactInfo": "string",
  "department": "string",
  "startDate": "string",
  "endDate": "string"
}
```

#### PUT /api/v1/interns/:id

**Description**: Update information for a specific intern.

**Request Body**:
```json
{
  "contactInfo": "string",
  "department": "string"
}
```

**Response**:
```json
{
  "id": "string",
  "name": "string",
  "contactInfo": "string",
  "department": "string",
  "startDate": "string",
  "endDate": "string"
}
```

#### DELETE /api/v1/interns/:id

**Description**: Delete a specific intern record.

**Response**:
```json
{
  "message": "Intern deleted successfully"
}
```

---

### Tasks

#### POST /api/v1/tasks

**Description**: Create a new task.

**Request Body**:
```json
{
  "internId": "string",
  "description": "string",
  "dueDate": "string",
  "priority": "string",
  "status": "string"
}
```

**Response**:
```json
{
  "taskId": "string",
  "internId": "string",
  "description": "string",
  "dueDate": "string",
  "priority": "string",
  "status": "string"
}
```

#### GET /api/v1/tasks

**Description**: Retrieve tasks with optional filters.

**Query Parameters**:
- `status` (optional, string): Filter by status.
- `priority` (optional, string): Filter by priority.

**Response**:
```json
{
  "tasks": [
    {
      "taskId": "string",
      "internId": "string",
      "description": "string",
      "dueDate": "string",
      "priority": "string",
      "status": "string"
    }
  ]
}
```

#### PUT /api/v1/tasks/:id

**Description**: Update the status of a specific task.

**Request Body**:
```json
{
  "status": "string"
}
```

**Response**:
```json
{
  "taskId": "string",
  "status": "string"
}
```

#### DELETE /api/v1/tasks/:id

**Description**: Delete a specific task.

**Response**:
```json
{
  "message": "Task deleted successfully"
}
```

---

### Performance Records

#### POST /api/v1/performance

**Description**: Add performance metrics for a specific intern.

**Request Body**:
```json
{
  "internId": "string",
  "performanceMetrics": "string",
  "date": "string"
}
```

**Response**:
```json
{
  "status": "string",
  "message": "string"
}
```

#### GET /api/v1/performance

**Description**: Retrieve performance records for a specific intern.

**Query Parameters**:
- `internId` (required, string): The ID of the intern.
- `startDate` (required, string): The start date for performance data.
- `endDate` (optional, string): The end date for performance data.

**Response**:
```json
{
  "performanceRecords": [
    {
      "internId": "string",
      "performanceMetrics": "string",
      "date": "string"
    }
  ]
}
```

#### PUT /api/v1/performance/:id

**Description**: Update performance metrics for a specific record.

**Request Body**:
```json
{
  "performanceMetrics": "string"
}
```

**Response**:
```json
{
  "status": "string",
  "message": "string"
}
```

#### DELETE /api/v1/performance/:id

**Description**: Delete a specific performance record.

**Response**:
```json
{
  "message": "Performance record deleted successfully"
}
```

---

### Feedback

#### POST /api/v1/feedback

**Description**: Submit feedback for an intern.

**Request Body**:
```json
{
  "internId": "string",
  "feedback": "string",
  "date": "string"
}
```

**Response**:
```json
{
  "status": "string",
  "message": "string"
}
```

#### GET /api/v1/feedback

**Description**: Retrieve feedback for a specific intern.

**Query Parameters**:
- `internId` (required, string): The ID of the intern.

**Response**:
```json
{
  "feedbacks": [
    {
      "feedbackId": "string",
      "internId": "string",
      "feedbackText": "string",
      "rating": "integer",
      "feedbackDate": "string"
    }
  ]
}
```

#### PUT /api/v1/feedback/:id

**Description**: Update feedback for a specific intern.

**Request Body**:
```json
{
  "feedback": "string"
}
```

**Response**:
```json
{
  "status": "string",
  "message": "string"
}
```

#### DELETE /api/v1/feedback/:id

**Description**: Delete feedback for a specific intern.

**Response**:
```json
{
  "message": "Feedback deleted successfully"
}
```

---

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

API documentation is provided via Postman. You can view the detailed API documentation [here](https://documenter.getpostman.com/view/38127552/2sAXjPzpPH)
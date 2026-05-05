# API Specification

## Base URL
`/api`

---

## Authentication

### POST /api/register
Register a new user

#### Request
```json
{
  "name": "Ali",
  "email": "ali@example.com",
  "password": "123456",
  "role": "student"
}


Response
json
{
  "id": 1,
  "name": "Ali",
  "email": "ali@example.com",
  "role": "student"
}


POST /api/login
Login user

Request
json
{
  "email": "ali@example.com",
  "password": "123456"
}

Response
json
{
  "access": "jwt_access_token",
  "refresh": "jwt_refresh_token"
}


GET /api/profile
Get current user profile

Response
json
{
  "id": 1,
  "name": "Ali",
  "email": "ali@example.com",
  "role": "student"
}



Courses
GET /api/courses
Get list of courses

Response
json
[
  {
"id": 1,
"title": "Web Development Basics",
"description": "Introduction to HTML, CSS, and JS",
"instructor": "Mr. Rezaei"
  }
]
POST /api/courses
Create a new course

Request
json
{
  "title": "Web Development Basics",
  "description": "Introduction to HTML, CSS, and JS"
}


Enrollment
POST /api/courses/:id/enroll
Enroll student in a course


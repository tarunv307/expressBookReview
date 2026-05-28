# expressBookReview
# 📚 Express Book Review API

## Description
Node.js + Express backend project for books and reviews.

## Features
- Get all books
- Get book by ISBN
- Get books by author
- Get books by title
- User registration
- User login
- Add/Delete reviews (authenticated users)

## Setup
npm install  
node index.js

Server runs at:
http://localhost:3000

## API Routes
- GET /books
- GET /books/:isbn
- GET /books/author/:author
- GET /books/title/:title
- POST /register
- POST /login
- POST /customer/auth/review/:isbn
- DELETE /customer/auth/review/:isbn

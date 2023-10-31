# NODE-CRUD-APP

Book CRUD Application is a web-based system designed for managing a collection of books. This application enables you to efficiently perform Create, Read, Update, and Delete (CRUD) operations on book records, making it an essential tool for bookstores, libraries, or anyone in need of organized book data management.

## Quick Start
- step 1:
  ```bash
  git clone https://github.com/saran-mani/node-crud-app.git
- step 2:
  ```bash
  cd node-crud-app
- step 3:
  ```bash
   npm install
- step 4:
  ```bash
    node app.js
## Table of Contents

- [API Endpoints](#api-endpoints)
- [Setup and Local Development](#setup-and-local-development)

## API Endpoints

### Book Endpoints

#### Retrieve All Books

- **URL:** `/books`
- **HTTP Method:** GET
- **Description:** Get a list of all books.
- **Example Usage:**
  ```bash
    curl -X GET http://localhost:3000/books
### Create a New Book
- URL: `/books`
- HTTP Method: POST
- Description: Create a new book.
- Request Body:
  ```bash
  {
  "title": "Book Title",
  "author": "Book Author",
  "summary": "Book Summary"
  }
- ### Example Usage:
  ```bash
      curl -X POST -H "Content-Type: application/json" -d '{"title": "Book Title", "author": "Book Author", "summary": "Book Summary"}' http://localhost:3000/books
### Retrieve a Specific Book
- URL: /books/:id
- HTTP Method: GET
- Description: Get details of a specific book by its ID.
- ### Example Usage:
  ```bash
   curl -X GET http://localhost:3000/books/1

### Update a Book
- URL: `/books/:id`
- HTTP Method: PUT
- Description: Update the details of a specific book by its ID.
- Request Body:
  ```bash
  {
  "title": "Updated Title",
  "author": "Updated Author",
  "summary": "Updated Summary"
  }
- ### Example Usage:
  ```bash
    curl -X PUT -H "Content-Type: application/json" -d '{"title": "Updated Title", "author": "Updated Author", "summary": "Updated Summary"}' http://localhost:3000/books/1
### Delete a Book
- URL: `/books/:id`
- HTTP Method: DELETE
- Description: Delete a specific book by its ID.
- ### Example Usage:
  ```bash
  curl -X DELETE http://localhost:3000/books/1

## Setup and Local Development
### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed and running.
- ### 1.Clone the repository:
  ```bash
     git clone https://github.com/saran-mani/node-crud-app.git
     cd node-crud-app
  
- ### 2.Install the necessary dependencies:
   ```bash 
     npm install
- ### 3.Start the application:
   ```bash
    node app.js

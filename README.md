# Your Project Name

Brief project description and purpose

## Table of Contents

- [API Endpoints](#api-endpoints)
- [Setup and Local Development](#setup-and-local-development)
- [Decisions and Assumptions](#decisions-and-assumptions)

## API Endpoints

### Book Endpoints

#### Retrieve All Books

- **URL:** `/books`
- **HTTP Method:** GET
- **Description:** Get a list of all books.
- **Example Usage:**
  ```bash
  curl -X GET http://localhost:3000/books
- Create a New Book
- URL: /books
- HTTP Method: POST
- Description: Create a new book.
- Request Body:
```bash
{
  "title": "Book Title",
  "author": "Book Author",
  "summary": "Book Summary"
}

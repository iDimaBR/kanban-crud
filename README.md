# Node.js Project with MongoDB

This project is a Node.js application that uses MongoDB to manage categories and tasks. Controllers were implemented to handle CRUD (Create, Read, Update, Delete) operations for both categories and tasks.

## Prerequisites

- Node.js installed (v14.x or higher)  
- MongoDB installed and running

## Installation

1. Clone the repository:

`git clone https://github.com/iDimabR/kanban-crud.git` 

2. Install the dependencies:

```
cd kanban-crud 
npm install
```

## Configuration

Make sure to configure the required environment variables for MongoDB connection in the `connection.js` file.

## Usage

To start the application, run:

npm start

This will start an Express server on the default port.

## Endpoints

### Categories

- `GET /categories` 
  Returns all categories.

- `GET /categories/:id`
  Returns a specific category by ID.

- `POST /categories/create`
  Creates a new category.

- `PUT /categories/:id`
  Updates an existing category by ID.

- `DELETE /categories/:id`
  Deletes a category by ID and also removes its associated tasks.

### Tasks

- `GET /tasks`
  Returns all tasks.

- `GET /tasks/:id`
  Returns all tasks of a specific category by category ID.

- `POST /tasks/create` 
  Creates a new task.

- `PUT /tasks/:id`
  Updates an existing task by ID.

- `DELETE /tasks/:id`
  Deletes a task by ID.

## Project Structure

- controllers/ → Contains the controllers for categories and tasks  
- models/ → Contains the data models for categories and tasks  
- connection.js → MongoDB connection configuration file  
- index.js → Main file that starts the Express server and defines the routes

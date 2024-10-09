
# Farmigo Server

Farmigo is a RESTful API built to manage products, blogs, and user authentication for a farming e-commerce application. This API allows users to register, log in, view products, and access blogs. Admin users can add new products to the platform..

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [Products](#products)
  - [Blogs](#blogs)
- [Scripts](#scripts)
- [Technologies](#technologies)
- [License](#license)

## Features

- User Registration and Login (JWT authentication)
- View and Create Products
- Access Blogs
- Secure endpoints for admin access

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/farmigo-server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd farmigo-server
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables:

   Create a `.env` file in the root directory and add the following:

   ```
   PORT=5000
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret_key
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

## Usage

### Authentication

#### Register a User

- **Endpoint**: `[/register](https://farmigo-server.onrender.com/api/v1/register)`
- **Method**: `POST`

Example:

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}
```

#### Login a User

- **Endpoint**: `[/login](https://farmigo-server.onrender.com/api/v1/login)`
- **Method**: `POST`

Example:

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

### Products

#### Get All Products

- **Endpoint**: `[/products](https://farmigo-server.onrender.com/api/v1/products)`
- **Method**: `GET`
- **Authorization**: Bearer Token required

#### Get a Single Product

- **Endpoint**: `[/products/:id](https://farmigo-server.onrender.com/api/v1/products/:id)`
- **Method**: `GET`
- **Authorization**: Bearer Token required

#### Create a Product (Farmer)

- **Endpoint**: `[/products/create](https://farmigo-server.onrender.com/api/v1/products/create)`
- **Method**: `POST`
- **Authorization**: Bearer Token (Farmer only)

Example:

```json
{
  "name": "Strawberry",
  "price": 2.0,
  "description": "Fresh strawberries"
}
```

### Blogs

#### Get All Blogs

- **Endpoint**: `[/blogs](https://farmigo-server.onrender.com/api/v1/blogs)`
- **Method**: `GET`

## Scripts

- `npm run dev`: Starts the development server with `ts-node-dev`.
- `npm run test`: Placeholder for running tests.

## Technologies

- **Node.js**
- **Express**
- **TypeScript**
- **Mongoose** (MongoDB ORM)
- **JWT (JsonWebToken)** for authentication
- **Firebase Admin** for handling notifications or other services

## License

This project is licensed under the **ISC** License.

# Node.js + TypeScript Clean Architecture API

A modern API built with Node.js, TypeScript, and Express, following the Clean Architecture principles. This project is designed to demonstrate scalable, maintainable, and SOLID-principled API development with features like dependency injection, JWT authentication, and user management (login, register).

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## Features
- **Clean Architecture**: Separation of concerns between core business logic, application services, and frameworks.
- **TypeScript**: Ensures type safety and enhances developer productivity.
- **Dependency Injection**: Managed using `InversifyJS`.
- **JWT Authentication**: Secure user authentication.
- **User Management**: Includes login and registration functionalities.
- **SOLID Principles**: Built with a focus on maintainable and scalable code.

---

## Technologies Used
- **Node.js**: Runtime environment for server-side JavaScript.
- **TypeScript**: Enhances JavaScript with static typing.
- **Express**: Minimal and flexible Node.js web application framework.
- **InversifyJS**: Dependency Injection for TypeScript and JavaScript.
- **JWT (JsonWebToken)**: Secure user authentication.
- **ESLint & Prettier**: Code quality and formatting.

---

## Project Structure
src/
  domain/
    entities/
    errors/
    interfaces/
  infrastructure/
    database/
    models/
    repositories/
    services/
  presentation/
    abstraction/
    auth/
      controller.ts
      routes.ts
    dtos/
    middlewares/
    routes/
  services/
  use-cases/
    auth/
    user/


### Key Layers

- **Domain**: Contains the core business logic and entities, including the errors and interfaces for communication between layers.
  - **entities**: Core business entities like `User`, `Product`, etc.
  - **errors**: Custom error handling and application-specific error definitions.
  - **interfaces**: Definitions of external dependencies, like repository interfaces.

- **Infrastructure**: Deals with the implementation of external dependencies like databases, repositories, services, and models.
  - **database**: Database connection and migrations.
  - **models**: ORM models, such as Sequelize or TypeORM models.
  - **repositories**: Concrete implementations of repository interfaces, handling data access.
  - **services**: Business logic for interacting with external services or utilities.

- **Presentation**: Manages the API layer including controllers, routes, middlewares, and request/response formatting.
  - **abstraction**: Abstractions like error handling and response formatting.
  - **auth**: Auth-related logic, including routes and controllers for login and registration.
    - **controller.ts**: Handles incoming requests and calls service layer.
    - **routes.ts**: Defines the API routes for authentication (login, register).
  - **dtos**: Data transfer objects for request/response formatting.
  - **middlewares**: Custom middleware for request validation, logging, authentication, etc.
  - **routes**: Application routes for various resources, such as users, products, etc.

- **Services**: Contains the business logic that performs specific use cases or domain logic.

- **Use Cases**: Implements the application's specific use cases, divided into specific domains like `auth` and `user`.
  - **auth**: Handles authentication-related use cases.
  - **user**: Manages user-related use cases, like profile management, etc.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sadikhanecioglu/node-ts-clean-architecture-api.git

2. Navigate to the project directory:
   ```bash
   cd node-ts-clean-architecture-api

3. Install dependencies:
   ```bash
   npm install

3. Create a .env file in the root directory and add the following variables:
   ```bash
    PORT=3000
    ENVIRONMENT=development
    MONGO_DB_URL=mongodb://localhost:27017
    MONGO_DATABASE=CleanArchitectureDev?authSource=admin
    JWT_SECRET=my_super_secret_key
    JWT_EXPIRES_IN=24h


---

## Usage

1. Run the development server:
   ```bash
   npm run dev

2. Build the project:
   ```bash
   npm run build

3. Run the development server:
   ```bash
   npm start


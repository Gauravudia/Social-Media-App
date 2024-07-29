# Social Media App

This is the API Gateway for the Social Media App. It routes incoming requests to the appropriate microservices (User Service, Discussion Service, and Interaction Service).

## Prerequisites

- Node.js

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd Social-Media-App/gateway
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Configuration

Create a `.env` file in the root directory and set the environment variables:
```env
USER_SERVICE_URL=http://localhost:3001
DISCUSSION_SERVICE_URL=http://localhost:3002
INTERACTION_SERVICE_URL=http://localhost:3003
PORT=8080

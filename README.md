# Biz Next Step API

## Overview

The **Biz Next Step API** is a backend application designed to provide various functionalities such as leadership advice, task management, user registration, sales suggestions, and integration with OpenAI's GPT model for generating responses. This API serves as the backbone for applications that require dynamic data handling and intelligent interactions.

## Features

- **Leadership Advice**: Get random leadership advice to inspire and guide team members.
- **Task Management**: Create, read, update, and delete tasks.
- **User Management**: Register new users with email and location.
- **Sales Suggestions**: Retrieve sales suggestions to enhance business strategies.
- **OpenAI Integration**: Interact with OpenAI's GPT model to generate responses based on user prompts.

## Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Axios (for API requests)
- dotenv (for environment variable management)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- MongoDB (local installation or a cloud instance)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BizNextStep/biz-next-step-api.git
   cd biz-next-step-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```plaintext
   OPENAI_API_KEY=your_openai_api_key_here
   MONGODB_URI=your_mongodb_uri_here
   ```

4. Start the application:
   ```bash
   npm start
   ```

### API Endpoints

#### Leadership Advice
- **GET** `/api/leadership/advice`
  - Returns a random piece of leadership advice.

#### Task Management
- **GET** `/api/tasks`
  - Retrieves all tasks.
  
- **POST** `/api/tasks`
  - Creates a new task.
  - **Request Body**:
    ```json
    {
      "task": "Sample Task",
      "dueDate": "2024-09-30"
    }
    ```

- **PUT** `/api/tasks/:id`
  - Updates an existing task.
  
- **DELETE** `/api/tasks/:id`
  - Deletes a specific task.

#### User Management
- **POST** `/api/users/register`
  - Registers a new user.
  - **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "location": "Some Location"
    }
    ```

#### Sales Suggestions
- **GET** `/api/sales/suggestions`
  - Retrieves sales suggestions.

#### OpenAI GPT Interaction
- **POST** `/api/gpt`
  - Sends a prompt to OpenAI's GPT model.
  - **Request Body**:
    ```json
    {
      "prompt": "Your prompt message here."
    }
    ```

## Testing the API

You can use tools like [Postman](https://www.postman.com) or [cURL](https://curl.se/) to test the API endpoints.

## Deployment

This API can be deployed on platforms like Heroku, Railway, or Render. Follow their respective documentation for deployment instructions.

## Contributing

Contributions are welcome! If you have suggestions for improvements or would like to report issues, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

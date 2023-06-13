# Auhentication Server

This project is an example of implementing authentication with Node.js and TypeScript.

## Getting Started

Follow the steps below to set up and run the project in your local environment.

### Prerequisites

- Node.js (version 12 or above)

### Installation

1. Clone the repository:

    ```bash 
    git clone https://github.com/canboslukberk/authentication.git
    ```

2. Install the dependencies
    
    ``` bash
    cd authentication
    npm install
    ```
3. Start the development server:
    
    ``` bash
    npm run dev
    ```
The server will run on http://localhost:3000.



## Usage
### API Endpoints

The following API endpoints are available:

    POST /api/v1/auth/register  : Register a new user.
    POST /api/v1/auth/login     : Log in an existing user.
    GET  /api/v1/auth/logout     : Log out the currently authenticated user.
    GET  /api/v1/user/:id        : Get the details of the currently authenticated user.    

You can use tools like cURL or Postman to interact with the API endpoints.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
License

This project is licensed under the MIT License.

Make sure to replace `<postgresql-config>` and `<your-jwt-secret>` with the actual values specific to your project. Additionally, feel free to include more details, instructions, or additional sections as needed for your project.

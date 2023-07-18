# Hostel Application

This repository contains the code for a Hostel Application built using React.js, Node.js, Express, and MongoDB. The application allows users to submit forms and view all the submitted forms.

## Installation

To run this application locally, please follow the instructions below:

1. Clone the repository:

   ```shell
   git clone https://github.com/AbulMohiz-01/hostel-application.git
   ```

2. Navigate to the project directory:

   ```shell
   cd hostel-application
   ```

3. Install the dependencies for the client-side:

   ```shell
   cd client
   npm install
   ```

4. Install the dependencies for the server-side:

   ```shell
   cd ../server
   npm install
   ```

5. Configure the MongoDB connection:
   - Create a `.env` file in the `server` directory.
   - Add your MongoDB connection string to the `.env` file:

     ```shell
     MONGODB_URI=your-mongodb-connection-string
     ```

6. Start the development server:

   ```shell
   npm run dev
   ```

7. Access the application by visiting [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- User-friendly interface for form submission.
- View and manage all the submitted forms.
- Built-in validation to ensure accurate form data.
- Responsive design for seamless usage on different devices.
- Secure authentication system.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- Node.js: A JavaScript runtime environment for server-side development.
- Express: A minimal and flexible web application framework for Node.js.
- MongoDB: A NoSQL database for storing and retrieving data.

## Contributing

Contributions to the Hostel Application are always welcome. If you find any issues or have suggestions for improvement, please feel free to submit a pull request.

Before contributing, please review the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

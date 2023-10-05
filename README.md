# Smart Face Detection Web Application

This web application allows users to detect human faces in pictures provided via image URLs. Users can upload a picture from the internet by pasting the image URL into the provided prompt. The application utilizes the Clarifai API for face detection.
https://sserwangaedrisa.github.io/Smart-Face-detector-App/
https://smart-face-detector-app-4vzc.vercel.app/

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- Deployed project link https://sserwangaedrisa.github.io/Smart-Face-detector-App/ or https://smart-face-detector-app-4vzc.vercel.app/

## Features

- **Face Detection**: The application uses the Clarifai API to accurately detect and mark human faces in uploaded images.
- **User Authentication**: Users can sign up, and their usage statistics are tracked as they detect faces in pictures.
- **Usage Tracking**: Each face detection increases the user's entry count, providing a measure of their activity on the platform.

## Technologies Used

- **Frontend**: JavaScript, React framework
- **Backend**: Node.js
- **Database**: PostgreSQL
- **Database Connectivity**: Knex.js
- **Password hashing**: Bcypt

## Getting Started

To run this project locally and contribute, follow these steps:

1. Clone the repository.
2. Install the necessary dependencies by running `npm install` in both the client and server directories.
3. Configure the Clarifai API credentials in the server.
4. Set up the PostgreSQL database and configure the connection in the server.
5. Start the server using `npm start` in the server directory.
6. Start the client using `npm start` in the client directory.

## Contributing

We welcome contributions! To contribute to this project:

1. Fork this repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add a new feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).


# CAD Design Visualizer Backend

This repository is built using Node.js and handles the backend for the CAD design visualizer. It stores metadata for recently visualized designs and provides the necessary APIs to manage and retrieve this data.

## Technologies Used

- **ExpressJS**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  - Documentation: [ExpressJS Documentation](https://expressjs.com/en/starter/hello-world.html)
  
- **Mongoose (MongoDB)**: An ODM (Object Data Modeling) library for MongoDB and Node.js, which provides a straight-forward, schema-based solution to model your application data.
  - Documentation: [Mongoose Documentation](https://mongoosejs.com/docs/)
  
- **AWS S3**: Amazon Simple Storage Service, which is used to store and retrieve any amount of data at any time, from anywhere on the web.

## Deployment

The backend is deployed on Amazon AWS Lambda, utilizing the serverless architecture to automatically scale with demand, minimize operational costs, and eliminate the need for managing infrastructure. This approach ensures that the backend services are highly available, reliable, and capable of handling variable workloads efficiently.

### Getting Started

Follow the steps below to set up and run the project on your local machine:

### Prerequisites

- Ensure that Node.js and npm are installed on your machine. You can download them from [here](https://nodejs.org/).
- MongoDB should be installed locally or you should have access to a MongoDB instance.
- AWS account with necessary permissions to use AWS S3 and AWS Lambda.

### Installation

1. **Clone this repository**:
   ```bash
   git clone https://github.com/yuvraj-singh-49/generic-prototype-backend.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd generic-prototype-backend
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Set up Environment Variables**:
   - Create a `.env` file in the root of your project.
   - Add the following environment variables:
     ```env
     DATABASE_USERNAME=your_mongo_db_username
     DATABASE_PASSWORD=your_mongo_db_password
     DATABASE_URL=your_mongodb_connection_string
     ACCESS_KEY=your_aws_access_key_id
     SECRET_ACCESS_KEY=your_aws_secret_access_key
     ```

### Running the Application

5. **Start the application**:
   ```bash
   npm start
   ```
   The application will start on the port (e.g., 5849). You can access it by navigating to `http://localhost:5849` in your browser or using an API client like Postman.

### Deployment

To deploy the backend on AWS Lambda:

1. **Install the Serverless Framework**:
   ```bash
   npm install -g serverless
   ```

2. **Deploy the application**:
   ```bash
   serverless deploy
   ```

### Contributing

If you'd like to contribute to this project, please fork the repository, create a new branch for your feature or bug fix, and submit a pull request. We welcome all contributions!

### License

This project is licensed under the MIT License - see the [LICENSE](../../../generic-prototype-backend/blob/main/LICENSE) file for details.

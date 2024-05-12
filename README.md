Web Application: BookStore

This web application is built to understand and test APIs provided by softwium.com/fake-api/. It includes both frontend pages and backend API calls to fetch and display book information.

Problem Statement:

The task involves familiarizing with the APIs provided at softwium.com/fake-api/ and implementing a frontend application with the following UI pages:

Books Page: Displays links to all books fetched dynamically from the "GET /Books" API.

Book Details Page: Displays detailed information about a selected book fetched from the "GET /Books/id" API.

Frontend Application Requirements
Books Page (http://localhost:<port>/books):
Display links to all books, with each book name as a clickable link.
Load books dynamically into the UI by making an API call to the "GET /Books" API.
Book Details Page (http://localhost:<port>/books/id):
Display the following details of the selected book by making a call to the "GET /Books/id" API:
Title
ISBN
PageCount
Authors

Create a link from the Books Page to navigate to the Book Details Page for each book.
Implementation Details
Frontend Framework: React.js
Routing: React Router
Styling: CSS with some use of Bootstrap for responsiveness
API Calls: Axios library for making HTTP requests
State Management: React hooks (useState, useEffect) for managing component state

Getting Started

Clone the repository: git clone https://github.com/niteshraj78/Hirademy_BookStore.git
Navigate to the project directory: cd  bookverse
Install dependencies: npm install
Start the development server: npm start
Open your browser and go to http://localhost:<port>

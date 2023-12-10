DO 

### `npm i `

to install dependencies


### `Configure the application`

Add '.env' file in project directory which contains following:
    1. DATABASE = mongoDb url
    2. port = 5000/(enter as per avialibility)

In the project directory, you can run:

### `npm start`

To start the server on port 5000/(as entered).

### Seeding the database

db.js contains function to connect to database if there is some error it will console it.

When server start it will connect to mongoDb by running 'connectToMongo()' and check if data is present in database or not. If not it will store the dummy data present in dummyData.js.

### Books in library

BookModel.js contains:-

A book have title, author, edition, ISBN(used to determine uniqueness of book), isAvialable.

### API Endpoints

Routes for CRUD operation in library is present in bookRoutes.js

1.  Route 1
    endpoint- /GET/api/books
    response- json.
    It will provide all books details present in library.

2.  Route 2
    endpoint- /POST/api/books
    request- json.
    response- json.
    It will add a new book detail in library. It will first check if there exists any book with same ISBN then it will not add the book details  otherwise it will add it.
    It will use express-validator to check if the fields are empty or not.

3.  Route 3
    endpoint- /PUT/api/books/:id
    request- json.
    response- json.
    It will update a book detail in library. It will first check if there exists any book with requested id then it will update the book details otherwise it will give the error message.
    This API will update the isAvialable if book is borrowed by someone or it is present in library.
    Here, Assuming that no other changes need to be done the admin.

### Validation 

    One can use postman or thunderclient to checkthe end points.





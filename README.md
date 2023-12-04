# SEMINA REST API 
Semina is a Node.js-based API designed to power an online ticketing website. It leverages ExpressJS for handling HTTP requests, Mongoose for MongoDB integration, and Node.js for server-side scripting.

## Installation & Run
```bash
# Download this project
go get github.com/Tegarsetyo6/semina
```

Before running API server, you should set the database config with yours or set the your database config with my values on [config.js]([https://github.com/mingrammer/go-todo-rest-api-example/blob/master/config/config.go](https://github.com/Tegarsetyo6/semina/blob/master/app/config.js))
```go
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV,
  jwtExpiration: '24h',
  jwtSecret: 'jwtSecret',
};,
	}
}
```

```bash
# Build and Run
cd semina
npm start
./semina

# API Endpoint : http://127.0.0.1:9000
```
## API

#### /auth/signin
* `POST` : Sign into an account

#### /categories
* `GET` : Get all categories
* `POST` : Create a categories

#### /categories/:id
* `GET` : Get a categories
* `PUT` : Update a categories
* `DELETE` : Delete a categories

* #### /events
* `GET` : Get all events
* `POST` : Create an event

#### /events/:id
* `GET` : Get an event
* `PUT` : Update an event
* `DELETE` : Delete an event

* #### /events/:id/status
* `PUT` : Update the status of event

* #### /images
* `POST` : Upload an Image

* #### /orders
* `GET` : Get an Order

#### /users
* `GET` : Get a user
* `POST` : Create a user

* #### /organizers
* `POST` : Create an Organizer

#### /auth/signup
* `POST` : Sign up a user

#### /auth/signin
* `POST` : Sign in a user

#### /active
* `PUT` : Activate a participant

#### /events
* `GET` : Get all landing page events

#### /events/:id
* `GET` : Get details of a landing page event by ID

#### /payments/:organizer
* `GET` : Get all payments for a specific organizer
  * Requires authentication

#### /orders
* `GET` : Get the dashboard for a participant

#### /checkout
* `POST` : Perform checkout for a participant

#### /payments
* `GET` : Retrieve all payments
* `POST` : Create a new payment entry

#### /payments/:id
* `GET` : Retrieve a specific payment by ID
* `PUT` : Update a specific payment by ID
* `DELETE` : Delete a specific payment by ID

#### /talents
* `GET` : Retrieve all talents
* `POST` : Create a new talent entry

#### /talents/:id
* `GET` : Retrieve a specific talent by ID
* `PUT` : Update a specific talent by ID
* `DELETE` : Delete a specific talent by ID


## Todo

- [x] Support basic REST APIs.
- [x] Support Authentication with user for securing the APIs.
- [x] Make convenient wrappers for creating API handlers.
- [ ] Write the tests for all APIs.
- [x] Organize the code with packages
- [ ] Building a deployment process 


# Full Stack Project (server) [![Build Status](https://travis-ci.org/dlchambersjr/full-stack-project.svg?branch=master)](https://travis-ci.org/dlchambersjr/full-stack-project)

### Author: David Chambers

### Links and Resources
* [REPO: Full Stack Server](https://github.com/dlchambersjr/full-stack-project)
* [DEPLOYED: Server](https://full-stack-back-end.herokuapp.com/)
* [REPO: React App](https://github.com/dlchambersjr/full-stack-project-react)
* [REPO: README.MD](https://github.com/dlchambersjr/full-stack-project-react/blob/master/README.md)
* [DEPLOYED: React App](http://dc-week7-fullstack-project.s3-website-us-west-2.amazonaws.com/)
(NOTE:  I attempted to upload with aws.yml twice with no success.)  

### Modules
#### `index.js` - entry point for the server

#### `server.js` - creates the necessary requirements and path for server traffic.
##### Exported Values and Methods
Exports the server process to be used by index.js

###### `app -> required functions of the server via express`
Establishes the router, 404 and error handling, and express requirements.

###### `start(port) -> starts the express server on the supplied port`
Send a message to the console that the server has been started.

###### `stop() -> stops the express server`
Send a message to the console that the server has been stopped.

#### `routes.js` - handles all HTTP requests to the server.
##### Exported Values and Methods
Exports the HTTP method handlers for the server to use.

###### `get('/') -> string`
Simple proof of life response path

###### `get('/content') -> JSON Data`
Responds with a JSON file of 'content'

#### `404.js` - handles route not found errors.
##### Exported Values and Methods
Renders a user friendly 404 error message with EJS

#### `error.js` - handles internal server errors.
##### Exported Values and Methods
Renders a user friendly 500 error message with EJS

### Setup
#### `.env` requirements
* `PORT` - Port Number

#### Running the app
* `npm start`
* Endpoint: `/`
  * Returns a 'Server Home'.
* Endpoint: `/content`
  * Returns a JSON object with content.

#### Tests
* Tests are begin made with Jest

##### `server.test.js` - 
* Tested that the server could start.
* Tested that the server could stop.

##### `router.test.js`
* Tested that the '/' route returned 'Server Home'.
* Tested that the '/content' route returned a JSON file with 'content'.

The following assertions need to be tested - There is confusion on how to return testable data when rendering EJS templates.
1. The server handles bad routes with 404 and renders a custom EJS response.
2. The server handles internal (500) errors and returns a custom EJS response.

#### UML
* [SERVER UML](https://raw.githubusercontent.com/dlchambersjr/full-stack-project-server/master/uml-server.jpg)
* [REACT UML](https://raw.githubusercontent.com/dlchambersjr/full-stack-project-server/master/uml-react.jpg)

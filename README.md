# dam-express-crud-api
This is just a simple CRUD API for dam skills made with Express. The aim is to provide an API as starting point to develop the skill's test project.

To start it, install Node and run:

```
npm install
npm start
```
## Avaiable endpoints to use
In this API we have the following endpoints to work with:

* /participantes
```
GET / -> Get the colection of members with their personal information.
GET /:id -> Get the data of the member with the given id. This information includes an array of points.
POST /:id -> Save a new point and category for the member with the given id. The information to save has to be in the body inside a JSON with "categoria" and "puntuacion" attributes.

```

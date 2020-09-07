const express = require('express');

const userController = require('./controllers/mongo/userController');
const customerController = require('./controllers/mongo/customerController');
const relativeController = require('./controllers/mongo/relativeController');

const routes = express.Router();

routes.post('/user', userController.create);
routes.get('/user', userController.read);
routes.put('/user/:id', userController.update);
routes.delete('/user/:id', userController.delete);

routes.post('/customer', customerController.create);
routes.get('/customer', customerController.read);
routes.put('/customer/:id', customerController.update);
routes.delete('/customer/:id', customerController.delete);

routes.post('/relative', relativeController.create);
routes.get('/relative', relativeController.read);
routes.put('/relative/:id', relativeController.update);
routes.delete('/relative/:id', relativeController.delete);

module.exports = routes;
const express = require('express');

const userController = require('./controllers/mongo/userController');
const customerController = require('./controllers/mongo/customerController');
const relativeController = require('./controllers/mongo/relativeController');
const travelPrefController = require('./controllers/mongo/travelPrefController');

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

routes.post('/travelPref', travelPrefController.create);
routes.get('/travelPref', travelPrefController.read);
routes.put('/travelPref/:id', travelPrefController.update);
routes.delete('/travelPref/:id', travelPrefController.delete);

module.exports = routes;
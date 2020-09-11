const express = require('express');

const userController = require('./controllers/mongo/userController');
const customerController = require('./controllers/mongo/customerController');
const relativeController = require('./controllers/mongo/relativeController');
const travelPrefController = require('./controllers/mongo/travelPrefController');
const travelController = require('./controllers/mongo/travelController');
const companionController = require('./controllers/mongo/companionController');
const intineraryController = require('./controllers/mongo/intineraryController');
const destinyController = require('./controllers/mongo/destinyController');
const flightScheduleController = require('./controllers/mongo/flightScheduleController');
const flightTicketsController = require('./controllers/mongo/flightTicketsController');
const cityController = require('./controllers/mongo/cityController');
const hotelController = require('./controllers/mongo/hotelController');

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

routes.post('/travel', travelController.create);
routes.get('/travel', travelController.read);
routes.put('/travel/:id', travelController.update);
routes.delete('/travel/:id', travelController.delete);

routes.post('/companion', companionController.create);
routes.get('/companion', companionController.read);
routes.put('/companion/:id', companionController.update);
routes.delete('/companion/:id', companionController.delete);

routes.post('/intinerary', intineraryController.create);
routes.get('/intinerary', intineraryController.read);
routes.put('/intinerary/:id', intineraryController.update);
routes.delete('/intinerary/:id', intineraryController.delete);

routes.post('/destiny', destinyController.create);
routes.get('/destiny', destinyController.read);
routes.put('/destiny/:id', destinyController.update);
routes.delete('/destiny/:id', destinyController.delete);

routes.post('/flightSchedule', flightScheduleController.create);
routes.get('/flightSchedule', flightScheduleController.read);
routes.put('/flightSchedule/:id', flightScheduleController.update);
routes.delete('/flightSchedule/:id', flightScheduleController.delete);

routes.post('/flightTickets', flightTicketsController.create);
routes.get('/flightTickets', flightTicketsController.read);
routes.put('/flightTickets/:id', flightTicketsController.update);
routes.delete('/flightTickets/:id', flightTicketsController.delete);

routes.post('/city', cityController.create);
routes.get('/city', cityController.read);
routes.put('/city/:id', cityController.update);
routes.delete('/city/:id', cityController.delete);

routes.post('/hotel', hotelController.create);
routes.get('/hotel', hotelController.read);
routes.put('/hotel/:id', hotelController.update);
routes.delete('/hotel/:id', hotelController.delete);

module.exports = routes;
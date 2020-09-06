const express = require('express');
const { Router } = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Hello world');
})

module.exports = routes;
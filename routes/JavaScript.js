const JSRoute = require('express').Router();
const { JSHome, JSPost, JSMethods, JSMethodPage } = require('../controllers/JSHome');

JSRoute.get('/', JSHome);

JSRoute.post('/', JSPost);

// JSRoute.get('/methods', JSMethods);

// JSRoute.get('/method/:name', JSMethodPage)

module.exports = JSRoute;
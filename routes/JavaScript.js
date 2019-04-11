const JSRoute = require('express').Router();
const { JSHome, JSPost, JSMethods, JSMethodPage } = require('../controllers/JSHome');

JSRoute.get('/', JSHome);

JSRoute.post('/', JSPost);

JSRoute.get('/:id', JSMethodPage)

module.exports = JSRoute;
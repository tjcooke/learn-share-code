const JSRoute = require('express').Router();
const {JSHome, JSPost} = require('../controllers/JSHome');

JSRoute.get('/', JSHome);

JSRoute.post('/', JSPost);

module.exports = JSRoute;
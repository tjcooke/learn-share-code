const dashRoute = require('express').Router();
const dashPage = require('../controllers/home');

dashRoute.get('/', dashPage);

module.exports = dashRoute;
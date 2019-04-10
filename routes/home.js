const homeRoute = require('express').Router();
const homePage = require('../controllers/home');

homeRoute.get('/', homePage);

module.exports = homeRoute;
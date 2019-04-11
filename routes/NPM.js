const NPMRoute = require('express').Router();
const { NPMHome, NPMPost, NPMMethods, NPMMethodPage } = require('../controllers/NPMHome');

NPMRoute.get('/', NPMHome);

// NPMRoute.post('/', NPMPost);

// NPMRoute.get('/methods', NPMMethods);

// NPMRoute.get('/method/:name', NPMMethodPage)

module.exports = NPMRoute;
const NPMRoute = require('express').Router();
const { NPMHome, NPMPost, NPMMethods, NPMMethodPage } = require('../controllers/NPMHome');

NPMRoute.get('/', NPMHome);

// NPMRoute.post('/', NPMPost);

// NPMRoute.get('/methods', NPMMethods);

NPMRoute.get('/:id', NPMMethodPage)

module.exports = NPMRoute;
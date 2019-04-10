const NPMRoute = require('express').Router();
const {NPMHome, NPMPost} = require('../controllers/NPMHome');

JSRoute.get('/', NPMHome);

JSRoute.post('/', NPMPost);

module.exports = NPMRoute;
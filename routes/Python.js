const PYRoute = require('express').Router();
const {PYHome, PYPost} = require('../controllers/PYHome');

JSRoute.get('/', PYHome);

JSRoute.post('/', PYPost);

module.exports = PYRoute;
const PYRoute = require('express').Router();
const {PYHome, PYPost, PYMethods, PYMethodPage} = require('../controllers/PYHome');

PYRoute.get('/', PYHome);

PYRoute.post('/', PYPost);

// PYRoute.get('/methods', PYMethods);

PYRoute.get('/:id', PYMethodPage)

module.exports = PYRoute;
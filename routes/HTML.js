const HTMLRoute = require('express').Router();
const {HTMLHome, HTMLPost, HTMLMethods, HTMLMethodPage} = require('../controllers/HTMLHome');

HTMLRoute.get('/', HTMLHome);

HTMLRoute.post('/', HTMLPost);

// HTMLRoute.get('/methods', HTMLMethods);

HTMLRoute.get('/:id', HTMLMethodPage);

module.exports = HTMLRoute;
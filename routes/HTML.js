const HTMLRoute = require('express').Router();
const {HTMLHome, HTMLPost} = require('../controllers/HTMLHome');

JSRoute.get('/', HTMLHome);

JSRoute.post('/', HTMLPost);

module.exports = HTMLRoute;
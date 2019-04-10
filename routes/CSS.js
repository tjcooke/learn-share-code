const CSSRoute = require('express').Router();
const {CSSHome, CSSPost} = require('../controllers/CSSHome');

JSRoute.get('/', CSSHome);

JSRoute.post('/', CSSPost);

module.exports = CSSRoute;
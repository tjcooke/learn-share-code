const CSSRoute = require('express').Router();
const {CSSHome, CSSPost, CSSMethods, CSSMethodPage} = require('../controllers/CSSHome');

CSSRoute.get('/', CSSHome);

CSSRoute.post('/', CSSPost);

// CSSRoute.get('/methods', CSSMethods);

// CSSRoute.get('/method/:name', CSSMethodPage)



module.exports = CSSRoute;
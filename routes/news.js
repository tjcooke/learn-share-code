const Router = require('express').Router;
const newsRoute = Router();

const { newsPage } = require('../controllers/news');


newsRoute.get('/', newsPage);
// newsRoute.post('/', loginPost);


module.exports = newsRoute;
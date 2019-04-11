const dashboardRoute = require('express').Router();
const {dashboardPage, dashboardPost} = require('../controllers/dashboard');

dashboardRoute.get('/', dashboardPage)

dashboardRoute.post('/',dashboardPost)

module.exports = dashboardRoute;


const dashboardRoute = require('express').Router();
const {dashboardPage, dashboardPost, dashboardMethod} = require('../controllers/dashboard');

dashboardRoute.get('/', dashboardPage)
dashboardRoute.get('/:id', dashboardMethod)

dashboardRoute.post('/:id',dashboardPost)

module.exports = dashboardRoute;

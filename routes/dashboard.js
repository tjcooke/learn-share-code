<<<<<<< HEAD
const dashRoute = require('express').Router();
const dashPage = require('../controllers/home');

dashRoute.get('/', dashPage);

module.exports = dashRoute;
=======
const dashboardRoute = require('express').Router();
const {dashboardPage, dashboardPost} = require('../controllers/dashboard');

dashboardRoute.get('/', dashboardPage)

dashboardRoute.post('/',dashboardPost)

module.exports = dashboardRoute;

>>>>>>> 99393bd7b228ce15f7767e22a57552197e668db0

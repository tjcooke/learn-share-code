require('dotenv').config();

const PORT = process.env.PORT;

const express = require('express');
const app = express();

const helmet = require('helmet');

app.use(helmet());

const es6Renderer = require('express-es6-template-engine');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const loginRouter = require('./routes/login')
// const dashboardRouter = require('./routes/dashboard')
const homeRouter = require('./routes/home')

app.use(express.urlencoded({ extended: true }));
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
app.use(session({
    store: new fileStore(),
    secret: process.env.SESSION_SECRET
}));

// app.use('/JavaScript', JSRouter);
// app.use('/Python', PyRouter);
// app.use('/NPM', NPMRouter);
// app.use('/CSS', CSSRouter);
// app.use('/HTML', HTMLRouter);
// app.use('/dashboard', modDashboard);
app.use('/', homeRouter);

app.use('/login', loginRouter);
// app.use('/dashboard', dashboardRouter);

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})
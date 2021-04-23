const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');

const authRouter = require('./routes/auth')
const flightcrewRouter = require('./routes/flightcrews')
const scheduleRouter = require('./routes/schedules')
const passengerRouter = require('./routes/passengers')

const cors = require('cors')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


app.use('/api/auth', authRouter);
app.use('/api/flightcrews', flightcrewRouter)
app.use('/api/schedules', scheduleRouter)
app.use ("/api/passengers", passengerRouter)


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, ()=> {
  console.log(`Express is listening on port ${port}.`)
});

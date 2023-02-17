const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

require('./api/config/database');

const usersRouter = require('./api/routes/users');
const jobsRouter = require('./api/routes/jobs');

const app = express();


app.use(cors());

app.use(logger('dev'));
app.use(express.json());

/**app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));*/
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/users', usersRouter)
app.use('/api/jobs', jobsRouter)


//create a puppies route

/**API goes here */
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  const port = process.env.PORT || 3001;

  app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });
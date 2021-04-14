const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 1128;
// Middleware
const morgan = require('morgan');

// Router
var router = require('./routes/routes.js');

// Use middleware
app.use(morgan('dev'));
app.use(express.json());

// Set up Routes

app.use('/', router);


// Serve static html files
app.use(express.static(path.join(__dirname, 'public', 'dist')));

// Make server listen
app.listen(port, () => {
  console.log('LISTENING ON PORT: ', port);
})
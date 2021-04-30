const express = require('express');
const path = require('path');
const app = express();
const compression = require('compression');

// Use middleware
app.use(compression());
app.use(require('cors')());
app.use(require('morgan')('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public/dist')));

// Set up Routes
app.use('/api', require('./routes/routes'));
app.use('/products/:id', express.static(path.join(__dirname, '../public/dist')));

// export
module.exports = app;

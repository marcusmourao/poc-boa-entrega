require('dotenv/config');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');

const appRoutes = require('./routes');
const cors = require('./core/cors/cors');
const connectToDatabase = require('./core/database/connection');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors);
app.use(helmet());

connectToDatabase();

app.use('/', appRoutes);

module.exports = app;

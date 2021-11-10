"use strict";

const express = require("express");
const app = express();
const PORT = process.env.PORT||7000;


const authRouter = require("./routes/auth.routes");
const jobsRouter=require('./routes/jobs.route')
require("dotenv").config();



const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
// const logger = require('./models/logger.js');


const cors = require('cors');
const morgan = require('morgan');


app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1', jobsRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(logger);

app.use(authRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);


function start() {
  app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
  });
}

module.exports = {
  start,
  app,
};

const express = require("express");
const server = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var cors = require("cors");
const path = require('path');


const routes = require('./src/routes/index');

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());

server.use("/", routes);

const port = process.env.PORT || 3001

server.listen( port , console.log(`Server listening at port ${port}`));

module.exports = server;
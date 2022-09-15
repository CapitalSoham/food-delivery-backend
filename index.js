const express = require('express');
const app = express();
require('dotenv').config();
const http_code = require('http-status-codes').StatusCodes;
const connectMongo = require('./db/connection');
const User = require('./db/models/user');
const userRoutes = require('./routers/userRoutes');
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    connectMongo();
    next();
});
app.use('/user',userRoutes(app,express));
app.listen(process.env.PORT, () => {
    console.log(`Now listening on port ${process.env.PORT}`);
});
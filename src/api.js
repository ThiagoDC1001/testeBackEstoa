const express = require('express')
const routers = require('./routes')
const User = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.use(routers.userRoute);

module.exports = app;
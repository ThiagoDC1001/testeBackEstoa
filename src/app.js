const express = require('express')
const User = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/users', User.getAll);

module.exports = app;
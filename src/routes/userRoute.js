const { Router } = require('express');
const userController = require('../controllers/user.controller');

const userRoute = Router();

userRoute.get('/users', userController.getAll);
userRoute.get('/users/:id', userController.getById);
userRoute.post('/users', userController.createUser);

module.exports = userRoute;
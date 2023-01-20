const { User } = require('../models');
const bcrypt = require('bcrypt');

const userService = {
  async getAll() {
    const users = await User.findAll();

    return users
  },

  async getById(id) {
    console.log("aqui")
    const user = await User.findByPk(id);

    return user;
  },

  async createUser (data) {    
    const { name, email, type, password, phoneNumber } = data;    
    const passwordHash = await bcrypt.hash(password, 10);
    const userExist = await User.findAll({ where: {email} });
    
    const newUser = await User.create({name, email, type, password: passwordHash, phoneNumber })

    return newUser;
  }

}

module.exports = userService;
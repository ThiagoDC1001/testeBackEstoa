const { User } = require('../models');
const bcrypt = require('bcrypt');

const userService = {
  async getAll() {
    const users = await User.findAll();

    return users
  },

  async getById(id) {    
    const user = await User.findByPk(id);

    return user;
  },

  async createUser (data) {    
    const { name, email, isADM, password, phoneNumber } = data;    
    const passwordHash = await bcrypt.hash(password, 10);
    // const userExist = await User.findAll({ where: {email} });
    // if (userExist[0]) throw new Error;
    const newUser = await User.create({name, email, isADM, password: passwordHash, phoneNumber })

    return newUser;
  },

  async deleteUser (id) { 
    await User.destroy({ where: {id} })
  },

  async updateUser (id, data) {    
    // return User.findOne({where: {id}})
    return User.update({ data }, { where: {id} })
    // return updatedUser;
  }

}

module.exports = userService;
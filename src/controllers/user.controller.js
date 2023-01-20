const userService = require('../services/user.service');

const userController = {
  async getAll(_req, res) {    
    try {
          const allUsers = await userService.getAll();
          return res.status(200).json(allUsers);
        } catch (err) {
          console.log(err.message);
          res.status(500).json({ message: 'Não foi bem assim' });
        }
  },

  async getById(req, res) {
    const { id } = req.params;
    const user = await userService.getById(id);
    res.status(200).json(user);
  },

  async createUser(req, res) {
    const data = req.body;    
    const newUser = await userService.createUser(data)
    res.status(201).json(newUser);

  }
}


module.exports = userController;
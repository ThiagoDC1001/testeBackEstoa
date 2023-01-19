const UserService = require('../services/user.service');

const getAll = async (_req, res) => {
  try {
    const allUsers = await UserService.getAll();
    return res.status(200).json(allUsers);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Não foi bem assim' });
  }
};

module.exports = {
  getAll,
};
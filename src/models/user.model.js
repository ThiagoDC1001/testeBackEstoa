const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    isADM: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
  });

  return User;
};

module.exports = UserModel;
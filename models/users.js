module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("users", {
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    gender: {
      type: DataTypes.STRING,
    },
  });

  return Users;
};

module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define(
    "tags",
    {
      name: DataTypes.STRING,
    },
    { createdAt: "created_at", updatedAt: "modified_at" }
  );
  return Tags;
};

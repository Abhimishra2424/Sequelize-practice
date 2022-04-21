module.exports = (sequelize, DataTypes) => {
  const Post_Tag = sequelize.define("post_tag", {
    postId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER,
  });
  return Post_Tag;
};

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("tut", "postgres", "Postgres#!123", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
  },
  logging: true,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users")(sequelize, DataTypes);
db.posts = require("./posts")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database & tables created!");
});

// aage se ja rahe hai 
// db.users.hasOne(db.posts, { foreignKey: "user_id", as: "postDetail" }); // define a userId
// db.posts.belongsTo(db.users, { foreignKey: "user_id", as: "userInfo" });
// post kise se Belong karta hai user ke

// One to Many ? ek user ka multiple post ho sakta hai
db.users.hasMany(db.posts, { foreignKey: "user_id", as: "posts" });
db.posts.belongsTo(db.users, { foreignKey: "user_id", as: "users" });

module.exports = db;

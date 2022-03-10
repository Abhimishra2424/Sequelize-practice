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
db.posts = require('./posts')(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database & tables created!");
});

module.exports = db;

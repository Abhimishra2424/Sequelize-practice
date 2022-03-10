const db = require("../models");
const Users = db.users;
const { Sequelize, Op, QueryTypes } = require("sequelize");

const adduser = async (req, res) => {
  try {
    let user = await Users.create({
      name: req.body.name,
      email: req.body.email,
    });
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const crudOperations = async (req, res) => {
  // insert
  try {
    // let user = await Users.create({
    //   name: req.body.name,
    //   email: req.body.email,
    // });

    // update

    // let data = await Users.update(
    //   { name: req.body.name },
    //   {
    //     where: {
    //       id: req.body.id,
    //     },
    //   }
    // );
    // delete
    // let data = await Users.destroy({
    //     where: {
    //         id: req.body.id,
    //     },
    // });
    // truncate
    // let data = await Users.destroy({
    //   truncate: true,
    // });
    // Bulk insert
    // let data = await Users.bulkCreate([
    //   {
    //     name: "John",
    //     email: "john@gmail.com",
    //   },
    //   {
    //     name: "Peter",
    //     email: "Peter@gmail.com",
    //   },
    // ]);
    // find
    // let data = await Users.findOne({});
    // let data = await Users.findAll({});

    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

const queryOperations = async (req, res) => {
  //   let data = await Users.create(
  //     { name: "ram", email: "test2@gamil.com" },
  //     {
  //       fields: ["email" , "name"],
  //     }
  //   );
  //   select sara data nikal lena
  //   let data = await Users.findAll({
  //     attributes: [
  //         ['name' , 'user_name']  ,
  //         ["email", "email_address"],
  //         // [Sequelize.fn("Count", Sequelize.col("email")), "count"]
  //     ]
  //   });

  //=======include and exclude========
  //   let data = await Users.findAll({
  //     attributes: {
  //       exclude: ["createdAt", "updatedAt"],
  //       include: [
  //         [Sequelize.fn("CONCAT", Sequelize.col("name"), " Mishra"), "full_name"],
  //       ],
  //     },
  //   });

  // ==========Condition ===========
  //   let data = await Users.findAll({
  //     where: {
  //       //   id: 4,
  //       //   id: {
  //       //     [Op.gt]: 4,
  //       //   },
  //       email: {
  //         [Op.like]: "%@gmail.com%",
  //       },
  //     },
  //     order: [
  //       ["name", "DESC"],
  //       //   ["email", "ASC"],
  //     ],
  //     // group: ["email", "name"],
  //     limit: 2,
  //     offset: 1,
  //   });

  // Total Count
  let data = await Users.findAndCountAll({});
  res.send(data);
};

const finderOperations = async (req, res) => {
  // findAll give all data
  // let data = await Users.findAll({
  //   where: {
  //     gender: "male",
  //   },
  // });

  // findOne give one data
  // let data = await Users.findOne({})

  // findByPk give one data with according to id
  // let data = await Users.findByPk(4)

  // findAndCountAll give all data and total count
  // let data = await Users.findAndCountAll({
  //   where: {
  //     email:"test@gmail.com"
  //   }
  // })

  // findAndCreate give all data and create new data
  // let [data, created] = await Users.findOrCreate({
  //   where: {name: "rohit1"},
  //     defaults: {
  //       email: "rohit1@gmail.com",
  //       gender: "male",
  //     },
  // });
  res.send(data);
};

const validationOperations = async (req, res) => {
  try {
    let data = await Users.create({ name: "ram", email: "ram@gamil.com" });

    res.send(data);
  } catch (e) {
    // const messages = {};

    // e.error.foreach((error) => {
    //   let message;
    //   switch (error.validatorKey) {
    //     case "not_unique":
    //       message = "Email is already taken";
    //       break;
    //     default:
    //       message = error.message;
    //       break;
    //   }
    //   messages[error.path] = message;
    //   console.log(messages);
    // });
    res.status(500).send(e.errors[0].message);
  }
};

const rawQueryOperations = async (req, res) => {
  const users = await db.sequelize.query(
    "select * from users where email LIKE :email",
    {
      type: QueryTypes.SELECT,
      // model: Users,
      // mapToModel: true,
      // raw: true,
      // replacements: { gender: "male" } //gender =:gender
      // replacements: ["male"], //gender = ?
      // replacements:{gender:['male','female']} //IN(:gender)
      //  replacements:{email:'%gmail.com'} //LIKE :email

    }
  );

  let response = {
    data: users,
  };
  res.status(200).json(response);
};

module.exports = {
  adduser,
  crudOperations,
  queryOperations,
  finderOperations,
  validationOperations,
  rawQueryOperations,
};
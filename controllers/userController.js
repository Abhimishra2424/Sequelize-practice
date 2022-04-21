const db = require("../models");
const Users = db.users;
const Posts = db.posts;
const Tags = db.tags;
const Post_tag = db.post_tag;

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
  let data = await Users.create(
    { name: "vik", email: "vik@gamil.com" },
    {
      fields: ["email", "name"],
    }
  );
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
  // let data = await Users.findAndCountAll({});
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

// SELECT "users"."id",
//        "users"."name",
//        "users"."email",
//        "users"."gender",
//        "users"."createdat",
//        "users"."updatedat",
//        "post"."id"          AS "post.id",
//        "post"."name"        AS "post.name",
//        "post"."title"       AS "post.title",
//        "post"."content"     AS "post.content",
//        "post"."user_id"     AS "post.user_id",
//        "post"."created_at"  AS "post.created_at",
//        "post"."modified_at" AS "post.modified_at"
// FROM   "users" AS "users"
//        LEFT OUTER JOIN "posts" AS "post"
//                     ON "users"."id" = "post"."user_id"
// WHERE  "users"."id" = 1;

const createPost = async (req, res) => {
  try {
    let data = await Posts.create({
      name: "news abhi",
      title: "abhi final",
      content: "abhi detail",
      user_id: 1,
    });
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

const createTags = async (req, res) => {
  try {
    let data = await Tags.create({
      name: "sports",
    });
    //     let data = await Tags.destroy({
    //    truncate: true,
    // });
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

const OneToOneOperations = async (req, res) => {
  try {
    let data = await Users.findAll({
      attributes: ["name", "email"],
      include: [
        {
          model: Posts,
          as: "postDetail",
          attributes: [["name", "postName"], "title", "content"],
        },
      ],
      where: { id: 1 },
    });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const postBelongsToUser = async (req, res) => {
  try {
    let data = await Posts.findAll({
      attributes: ["name", "title", "content"],
      include: [
        {
          model: Users,
          attributes: ["name", "email"],
        },
      ],
    });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const OneToManyOperations = async (req, res) => {
  try {
    let data = await Users.findAll({
      attributes: ["name", "email"],
      include: [
        {
          model: Posts,
          as: "posts",
          attributes: [["name", "postName"], "title", "content"],
        },
      ],
    });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const manyToManyOperations = async (req, res) => {
  // Post to Tags ==========>
  try {
    // let data = await Posts.findAll({
    //   attributes: ["title", "content"],
    //   include: [
    //     {
    //       model: Tags,
    //       attributes: ["name"],
    //     },
    //   ],
    // });

    // Tag to Post ============>
    let data = await Tags.findAll({
      attributes: ["name"],
      include: [
        {
          model: Posts,
          attributes: ["title"],
        },
      ],
    });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const createPost_tag = async (req, res) => {
  try {
    let data = await Post_tag.create({
      postId: "4",
      tagId: "2",
    });
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  adduser,
  crudOperations,
  queryOperations,
  finderOperations,
  validationOperations,
  rawQueryOperations,
  OneToOneOperations,
  postBelongsToUser,
  OneToManyOperations,
  createPost,
  createTags,
  createPost_tag,
  manyToManyOperations,
};

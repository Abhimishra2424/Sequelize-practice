const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
require('./models')
var userController = require('./controllers/userController');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", userController.adduser)
app.get("/crud", userController.crudOperations)
app.get("/query", userController.queryOperations)
app.get("/finder", userController.finderOperations)
app.get("/validation", userController.validationOperations)
app.get("/raw-query", userController.rawQueryOperations)
app.get("/OneToOne", userController.OneToOneOperations)
app.get("/postBelongsToUser", userController.postBelongsToUser)
app.get("/OneToMany", userController.OneToManyOperations)
app.get("/addPost", userController.createPost)
app.get('/addTags',userController.createTags)
app.get('/addPost_tag', userController.createPost_tag)
app.get("/manytoMany", userController.manyToManyOperations)




app.listen(PORT, () => {
  console.log(`Example app listening at PORT=>${PORT}`);
});

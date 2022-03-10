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



app.listen(PORT, () => {
  console.log(`Example app listening at PORT=>${PORT}`);
});

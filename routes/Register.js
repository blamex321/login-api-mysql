const express = require("express");
const connection = require("../connections/sqlconnection.js");
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended:true}));

router.get("/", function (req, res) {
    res.status(200).send("return Registration page");
});

router.post("/", function (req, res) {
  const name = req.body.name;
  var findUser = "select * from login where username = '" + name + "';";
  connection.query(findUser, function (err, results) {
    if (err) throw err;
    if (results.length >= 1) {
      res.status(200).send("User already exists");
    } else {
      const password = req.body.password;
      var query =
        "insert into login(username,password) values ('" +
        name +
        "', '" +
        password +
        "')";
      connection.query(query, function (err, results) {
        if (err) throw err;
        res.status(200).send("User created successfully");
      });
    }
  });
});

module.exports = router;

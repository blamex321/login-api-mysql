const express = require("express");
const connection = require("../connections/sqlconnection.js");
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended:true}));

router.get("/",function(req,res){
    res.status(200).send("Login page successfully fetched");
});

router.post("/",function(req,res){
    const name = req.body.name;
    var findUser = "select * from login where username = '" + name + "';";
    connection.query(findUser, function (err, results,fields){
        if(err) throw err;
        else if(results.length > 0){
            var password = req.body.password;
            if(results[0].password === password){
                res.status(200).send("User found and logged in successfully");
            } else {
                res.status(401).send("Password does not match");
            }
        } else {
            res.status(401).send("User doesnot exist");
        }
    });
});

module.exports = router;
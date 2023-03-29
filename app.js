require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');


const registerRoute = require('./routes/Register');
const loginRoute = require('./routes/Login');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.status(200).send("Landing page");
});

app.use("/register",registerRoute);
app.use("/login",loginRoute);

app.listen(process.env.PORT || 3000,function(){
    console.log('Server listening on port 3000');
});
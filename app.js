const express = require("express");
const app = express();
const session = require("express-session");
require("dotenv").config();

const mongoose = require("mongoose")

mongoose.connect(process.env.url_DB)
.then(()=>{console.log("connencting to the mongoose db!");})
.catch((err)=>{console.log(err)});

const router = require("./router/router");

app.use(session({
   secret: process.env.SecretCode,
   resave: false,
   saveUninitialized: true
}));

app.set("view engine", "ejs");
app.set("views", "./frontend");

app.use(express.json());
app.use(express.static("./frontend/public"));
app.use(express.urlencoded({extended: true}));

app.use("", router);

app.listen(1111,()=>{
   console.log("the server listening on port 1111. then its work");
});
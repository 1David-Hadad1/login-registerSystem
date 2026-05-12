const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

const pagesAuth = require("../middleware/pagesAuth");
const adminAuth = require("../middleware/adminAuth");

const session = require("express-session");

router.get("/", pagesAuth, (req, res)=>{
   const user = req.session.user;
   res.render("../frontend/views/Home.ejs", {user});
});

router.get("/Register", (req, res)=>{
   res.render("../frontend/views/Register.ejs", {
      errorMessage: null
   });
});

router.get("/login", (req, res)=>{
   res.render("../frontend/views/Login.ejs", {
      errorMessage: null
   });
});

router.get("/Admin", adminAuth, pagesAuth, (req, res)=>{
   res.render("../frontend/views/Admin.ejs");
});

router.post("/register", (req, res)=>{
   userController.registerAccount(req, res);
});

router.post("/login", (req, res)=>{
   userController.loginAccount(req, res);
});

router.post("/logout", (req, res)=>{
   req.session.destroy(session.user);
   res.redirect("/register");
});

module.exports = router;
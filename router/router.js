const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const workoutController = require("../controllers/workoutController");

const pagesAuth = require("../middleware/pagesAuth");
const adminAuth = require("../middleware/adminAuth");

const session = require("express-session");

const userSchema = require("../models/userSchema");
const workoutSchema = require("../models/workoutSchema");

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

router.get("/Admin", adminAuth, pagesAuth, async (req, res)=>{
   const user = req.session.user;
   const allusers = await userSchema.find({});
   res.render("../frontend/views/Admin.ejs", {user, allusers});
});

router.get("/CreateWorkout", pagesAuth, async (req, res)=>{
   const user = req.session.user;
   res.render("../frontend/views/CreateWorkout.ejs", {user});
});

router.get("/startWorkout", pagesAuth, async (req, res)=>{
   const workouts = await workoutSchema.find({
      userID: req.session.user._id
   });
   const user = req.session.user;

   res.render("../frontend/views/startWorkout.ejs", {workouts, user});
});

router.get("/workout/:id", pagesAuth, async (req,res)=>{
   const workout = await workoutSchema.findById(req.params.id);   
   res.render("../frontend/views/workoutPage.ejs", {workout});
});

router.post("/register", (req, res)=>{
   userController.registerAccount(req, res);
});

router.post("/login", (req, res)=>{
   userController.loginAccount(req, res);
});

router.post("/logout", (req, res)=>{
   req.session.destroy(session.user);
   res.redirect("/login");
});

router.post("/createWorkout", pagesAuth, async (req, res)=>{
   workoutController.createWorkout(req ,res);
   res.redirect("/CreateWorkout");
});

module.exports = router;
const userSchema = require("../models/userSchema");

module.exports.registerAccount = async (req, res)=>{
   if(req.body.userpassword == req.body.userrepassword){

      if(req.body.userpassword.length > 8){

         const newUser = await userSchema.create({
            userName: req.body.username,
            userEmail: req.body.useremail,
            userPassword: req.body.userpassword,
         });

         newUser.save().then(()=>{//the account are created!
            req.session.user = newUser;
            console.log("the account are created!");
            res.redirect("/");
         });
      }
      else{
         res.render("../frontend/views/Register.ejs", {
            errorMessage: "You need more then 8 letters to the password!"
         });
      }
   }else{
      res.render("../frontend/views/Register.ejs", {
         errorMessage: "The password are not the same!"
      });
   }
};

module.exports.loginAccount = async (req, res)=>{
   const isUser = await userSchema.findOne({
      userEmail: req.body.useremail,
      userPassword: req.body.userpassword
   });

   if(isUser){
      //all work and start to login the account to session!
      req.session.user = isUser;
      console.log("The account " + req.session.user.userName + " online on the website!");
      res.redirect("/");
   }
   else{
      res.render("../frontend/views/Login.ejs", {
         errorMessage: "The email or the password are worng!"
      });
   }
};
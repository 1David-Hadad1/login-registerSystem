const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   userName: {
      type:String
   },
   userEmail: {
      type:String
   },
   userPassword: {
      type:String
   },
   isAdmin: {
      type:Boolean,
      default:false
   },
});

module.exports = mongoose.model("users", userSchema);
const { name } = require("ejs");
const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
   userID: String,
   title: String,

   exercises: [
      {
         name: String,

         sets: [
            {
               weight: Number,
               reps: Number,
            }
         ]

      }
   ]

});

module.exports = mongoose.model("workout", workoutSchema);
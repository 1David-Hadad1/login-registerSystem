const mongoose = require("mongoose");

const wHistorySchema = new mongoose.Schema({
   userID: String,
   workoutID: String,
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

module.exports = mongoose.model("workoutHistory", wHistorySchema);
const workoutSchema = require("../models/workoutSchema");

module.exports.editWorkout = async (req, res)=>{
   const updatedWorkoutExercise = [];

   for (let i = 0; i < req.body.exerciseName.length; i++) {

      updatedWorkoutExercise.push({
         name: req.body.exerciseName[i],

         sets: []
      });

   }

   console.log(updatedWorkoutExercise);
   const thisWorkoutToUpdate = await workoutSchema.findById(req.params.id);
   thisWorkoutToUpdate.title = req.body.title;
   thisWorkoutToUpdate.exercises = updatedWorkoutExercise;

   thisWorkoutToUpdate.save().then(async ()=>{
      await res.redirect("/");
      await console.log("this wrokout exercises updated!");
   });
}
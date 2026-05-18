const workoutSchema = require("../models/workoutSchema");

module.exports.createWorkout = async (req, res) =>{
   if(!req.body.exerciseName){
      return console.log("you need to create exercuses!");
   }

   const exercises = [];

   for (let i = 0; i < req.body.exerciseName.length; i++) {
      exercises.push({
         name: req.body.exerciseName[i],

         sets: [
            {
               weight: req.body.weight[i],
               reps: req.body.reps[i]
            }
         ]
      });
   }

   const workout = new workoutSchema({
      userID: req.session.user._id,
      title: req.body.title,

      exercises
   })

   workout.save();
};

module.exports.finishWorkout = async (req, res) => {
   const updatedExercises = [];

   req.body.exercises.forEach(exercise => {
      const sets = [];

      for (let i = 0; i < exercise.weight.length; i++) {
         sets.push({
            weight: exercise.weight[i],
            reps: exercise.reps[i]
         });
      };

      updatedExercises.push({
         name: exercise.name[0],
         sets: sets
      })
   });

   const workoutData = await workoutSchema.findById(req.params.id);
   workoutData.exercises = updatedExercises;
   await workoutData.save();
};
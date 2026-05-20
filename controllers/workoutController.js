const workoutSchema = require("../models/workoutSchema");
const wHistorySchema = require("../models/wHistorySchema");

module.exports.createWorkout = async (req, res) =>{   
   if(!req.body.exerciseName){
      return console.log("you need to create exercuses!");
   }

   const exercises = [];

   for (let i = 0; i < req.body.exerciseName.length; i++) {
      exercises.push({
         name: req.body.exerciseName[i],

         sets: []
      });
   }

   const workout = new workoutSchema({
      userID: req.session.user._id,
      title: req.body.title,

      exercises
   })

   workout.save();
};

module.exports.saveWorkout = async (req, res) => {   
   console.log(req.body.endWorkout);
   
   const updatedExercises = [];

   req.body.exercises.forEach(exercise => {
      const sets = [];

      if(exercise.weight){
         for (let i = 0; i < exercise.weight.length; i++) {
            sets.push({
               weight: exercise.weight[i],
               reps: exercise.reps[i]
            });
         };
      }

      updatedExercises.push({
         name: exercise.name,
         sets: sets
      })
   });

   const workoutData = await workoutSchema.findById(req.params.id);
   workoutData.exercises = updatedExercises;
   await workoutData.save();

   const isEnding = req.body.endWorkout === "true";

   if(isEnding){
      console.log("the end workout are running");
      
      const thisWorkout = await workoutSchema.findById(req.params.id)      

      const newHistroyWorkout = new wHistorySchema({
         userID: req.session.user._id,
         workoutID: req.params.id,
         title: thisWorkout.title,

         exercises: thisWorkout.exercises
      });

      await newHistroyWorkout.save().then( async () =>{
         thisWorkout.exercises.forEach(exercise =>{
            exercise.sets = [];
         });

         await thisWorkout.save();
      });
   }

   res.redirect("/workout/" + req.params.id);
};
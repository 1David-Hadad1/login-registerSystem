const exerciseCon = document.getElementById('exercise-con');
console.log("this script is runing!");

document.getElementById('addExercise').addEventListener("click", () =>{   
   exerciseCon.innerHTML += `
      <div class="Exercise">
            <input class="exerciseName" type="text" name="exerciseName" placeholder="שם של התרגיל">
            <div>
               <input type="number" name="weight" placeholder="משקל">
               <input type="number" name="reps" placeholder="חזרות">
            </div>
         <button type="button" class="delete-btn">מחק תרגיל</button>
      </div>
   `
});

exerciseCon.addEventListener("click", (e) =>{
   if(e.target.classList.contains("delete-btn")){
      e.target.parentElement.remove();
   }
});
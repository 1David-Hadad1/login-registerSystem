const exerciseCon = document.getElementById('exercise-con');
console.log("this script is runing!");

document.getElementById('addExercise').addEventListener("click", () =>{   
   exerciseCon.innerHTML += `
      <div class="Exercise">
         <input type="text" name="exercise[]" placeholder="שם של התרגיל">
         <input type="number" name="weight[]" placeholder="משקל">
         <input type="number" name="reps[]" placeholder="חזרות">
         <button type="button" class="delete-btn">מחק</button>
      </div>
   `
});

exerciseCon.addEventListener("click", (e) =>{
   if(e.target.classList.contains("delete-btn")){
      e.target.parentElement.remove();
   }
});
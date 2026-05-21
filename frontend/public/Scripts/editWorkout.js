const exerciseCon = document.getElementById('exercise-con');

document.getElementById('addExercise').addEventListener("click", () =>{   
   const createRow = document.createElement("div");
   createRow.innerHTML += `
      <div class="Exercise">
         <input class="exerciseName" type="text" name="exerciseName[]" placeholder="שם של התרגיל">
         <button type="button" class="delete-btn">מחק תרגיל</button>
      </div>
   `
   exerciseCon.appendChild(createRow);
});

exerciseCon.addEventListener("click", (e) =>{
   if(e.target.classList.contains("delete-btn")){
      e.target.parentElement.remove();
   }
});
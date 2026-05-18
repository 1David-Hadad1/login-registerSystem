const addSetBtn = document.querySelectorAll(".addSetBtn");

addSetBtn.forEach(btn => {
   const exercise = btn.parentElement;
   const setDiv = exercise.querySelector(".sets");

   btn.addEventListener("click", () =>{
      const setRow = document.createElement("div");

      const exercise = btn.closest(".exerciesCon");
      const exerciseIndex = exercise.dataset.index;
      
      setRow.innerHTML += `
         <div class="set-row">
            <input type="number" name="exercises[${exerciseIndex}][weight][]" required>
            <input type="number" name="exercises[${exerciseIndex}][reps][]" required>
            <button type="button" class="delete-btn">מחק תרגיל</button>
         </div>
      `

      setDiv.appendChild(setRow);
   });

   setDiv.addEventListener("click", (e) =>{
      if(e.target.classList.contains("delete-btn")){
         e.target.parentElement.remove();
      }
   });
});

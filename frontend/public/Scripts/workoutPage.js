const addSetBtn = document.querySelectorAll(".addSetBtn");

addSetBtn.forEach(btn => {
   const exercise = btn.parentElement;
   const setDiv = exercise.querySelector(".sets");

   btn.addEventListener("click", () =>{
      const setRow = document.createElement("div");
      setRow.className = "set-row";

      const exercise = btn.closest(".exerciesCon");
      const exerciseIndex = exercise.dataset.index;
      
      setRow.innerHTML += `
         <p>משקל:</p>
         <input type="number" name="exercises[${exerciseIndex}][weight][]" required>
         <p>חזרות:</p>
         <input type="number" name="exercises[${exerciseIndex}][reps][]" required>
         <button type="button" class="delete-btn">מחק</button>
      `

      setDiv.appendChild(setRow);
   });

   setDiv.addEventListener("click", (e) =>{
      if(e.target.classList.contains("delete-btn")){
         e.target.closest('.set-row').remove();
      }
   });
});

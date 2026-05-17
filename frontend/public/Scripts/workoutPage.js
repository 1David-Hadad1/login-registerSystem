const addSetBtn = document.querySelectorAll(".addSetBtn");

addSetBtn.forEach(btn => {
   const exercise = btn.parentElement;
   const setDiv = exercise.querySelector(".sets");

   btn.addEventListener("click", () =>{
      const setRow = document.createElement("div");
      setRow.innerHTML += `
         <div class="set-row">
            <input type="number" name="weight" placeholder="weight" required>
            <input type="number" name="reps" placeholder="reps" required>
         </div>
      `

      setDiv.appendChild(setRow);
   });
});
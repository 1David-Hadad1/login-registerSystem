var isMenued = false;

function OpenAndCloseMenu() {
   const menuBody = document.getElementById('Menu-Body');
   const headerBody = document.getElementById('Header-Body');
   const thisBody = document.getElementById('This-Body');

   if(!isMenued){
      isMenued = true;
      menuBody.style.display = "";
      headerBody.style.display = "none";
      thisBody.style.display = "none";
   }
   else{
      isMenued = false;
      menuBody.style.display = "none";
      headerBody.style.display = "";
      thisBody.style.display = "";
   }
}
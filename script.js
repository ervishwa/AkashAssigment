//selector

const toggleButton  = document.getElementById("toggle_Button");
const navbar = document.getElementById("navbarToggleExternalContent");
let open = false;

toggleButton.addEventListener('click',()=>{
    toggleButton.style.borderColor = "#f5a70c";
     toggleButton.style.borderWidth = "3px";
   if(!open){
    navbar.style.display = "unset";
    open = true;
   }else{
    navbar.style.display = "none";
    open = false;
   }
})
var thedrawers= document.querySelectorAll('.drawer');



/*-------------------------------------
| for each function
-------------------------------------*/

thedrawers.forEach(function(drawer){
        drawer.addEventListener("click", function(){

        drawer.classList.toggle("on");
   });
});

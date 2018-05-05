var boxes= document.querySelectorAll('.box');



/*-------------------------------------
| for each function
-------------------------------------*/

boxes.forEach(function(box){
        box.addEventListener("click", function(){

           box.classList.toggle("on");
     }
   });
});

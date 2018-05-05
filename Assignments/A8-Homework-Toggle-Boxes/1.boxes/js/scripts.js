var boxes= document.querySelectorAll('.box');



/*-------------------------------------
| for each function
-------------------------------------*/

boxes.forEach(function(theMove){
        theMove.addEventListener("click", function(){
        for (var i=0; i<boxes.length; i++){

           boxes[i].classList.toggle("on");
     }
   });
});

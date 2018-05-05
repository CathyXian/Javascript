
var tabLinks= document.querySelectorAll('.tabbed .tabs a');
var theSections= document.querySelectorAll('.tabbed section');


/*-------------------------------------
| Function
-------------------------------------*/
function switchSection(whichSection) {


  whichSection= whichSection-1;

  for (var i=0; i<theSections.length; i++){

    theSections[i].style.display="none";
  }


  theSections[whichSection].style.display='block';



  tabLinks.forEach(function(theLink){
    theLink.classList.remove('chosen');
  });

  // console.log(tabLinks);

  tabLinks[whichSection].classList.add('chosen');
}

//function call
switchSection(2);

tabLinks.forEach(function(currentLink){

    currentLink.addEventListener('click',function(event){

    event.preventDefault();

    var whatSect=this.dataset.section;
    switchSection(whatSect);

   });
});

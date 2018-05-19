
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
  theLink.classList.add('chosen');
  });
  tabLinks[whichSection].classList.remove('chosen');
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

/*-------------------------------------
| LightBox Effects
-------------------------------------*/

var theImages = document.querySelectorAll('.respond');
var theLightbox = document.querySelector('.lightbox');
var theCloseButton = document.querySelector('.lightbox .close');
var lboxImage=document.querySelector('.lightbox img');
var lboxTitle = document.querySelector('.lightbox .title');

console.log(theImages);

function light_on(){

  var theTitle = this.dataset.title;

  lboxTitle.innerHTML=theTitle;

  var prefix="./img/large/";
  var filename=this.dataset.filename;
  //this.src=prefix+filename;

  lboxImage.src=prefix+filename;
  theLightbox.style.display='block';
}

var light_off = function(){

  //var filename=this.dataset.filename;
  //var prefix="./img/small/";

  //theImages.src=prefix+filename;


  theLightbox.style.display='none';


};

theImages.forEach(function(currentLink){
    currentLink.addEventListener('click',light_on);
    theCloseButton.addEventListener('click',light_off);
});

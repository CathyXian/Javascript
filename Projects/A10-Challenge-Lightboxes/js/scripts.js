var theImages = document.querySelectorAll('.myLightbox');
var theLightbox = document.querySelector('.lightbox');
var theCloseButton = document.querySelector('.lightbox .close');
var lboxImage=document.querySelector('.lightbox img');
var lboxTitle = document.querySelector('.lightbox .title');
var lboxDesc = document.querySelector('.lightbox .description');


console.log(theImages);

function light_on(){

  var theTitle = this.dataset.title;

  lboxTitle.innerHTML=theTitle;

  lboxImage.src=this.src;
  theLightbox.style.display='block';

  var theDes= this.dataset.text;
  lboxDesc.innerHTML=theDes;
}


var light_off = function(){
  console.log("off");
  theLightbox.style.display='none';
};

theImages[0].addEventListener('click', light_on);
theImages[1].addEventListener('click', light_on);
theImages[2].addEventListener('click', light_on);
theImages[3].addEventListener('click', light_on);
theImages[4].addEventListener('click', light_on);
theImages[5].addEventListener('click', light_on);

theCloseButton.addEventListener('click',light_off);

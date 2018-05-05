var imageDials = document.querySelectorAll('div.choices img');
var linkTheme =document.querySelector('link.theme');
//var linkTheme =document.querySelectorAll(link.theme);
//var whichTheme = imageDials[1].dataset.theme;
//linkTheme[0].href = whichTheme;


console.log(imageDials);
console.log(imageDials[0].dataset.theme);
console.log(imageDials[1].dataset.theme);
console.log(imageDials[2].dataset.theme);

imageDials[1].addEventListener('click',function(){
  console.log("you clicked me!");

  imageDials[0].classList.remove('chosen');
  imageDials[1].classList.remove('chosen');
  imageDials[2].classList.remove('chosen');

  imageDials[1].classList.add('chosen');

  var whichTheme = imageDials[1].dataset.theme;
  linkTheme.href = whichTheme;

  //document.querySelector('link.theme').href=whichTheme;


});

imageDials[2].addEventListener('click',function(){
  console.log("you clicked me!");

  imageDials[0].classList.remove('chosen');
  imageDials[1].classList.remove('chosen');
  imageDials[2].classList.remove('chosen');

  imageDials[2].classList.add('chosen');

  var whichTheme = imageDials[2].dataset.theme;
  linkTheme.href = whichTheme;
  //document.querySelector('link.theme').href=whichTheme

});

imageDials[0].addEventListener('click',function(){
  console.log("you clicked me!");

  imageDials[0].classList.remove('chosen');
  imageDials[1].classList.remove('chosen');
  imageDials[2].classList.remove('chosen');

  imageDials[0].classList.add('chosen');

  var whichTheme = imageDials[0].dataset.theme;
  linkTheme.href = whichTheme;

  //document.querySelector('link.theme').href=whichTheme

});

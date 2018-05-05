var imageDials = document.querySelectorAll('div.choices img');
var linkTheme =document.querySelector('link.theme');
//var linkTheme =document.querySelectorAll(link.theme);
//var whichTheme = imageDials[1].dataset.theme;
//linkTheme[0].href = whichTheme;


console.log(imageDials);
console.log(imageDials[0].dataset.theme);
console.log(imageDials[1].dataset.theme);
console.log(imageDials[2].dataset.theme);


imageDials.forEach(function(item){

  item.addEventListener('click',function(){
    console.log("looped me!");

    imageDials[0].classList.remove('chosen');
    imageDials[1].classList.remove('chosen');
    imageDials[2].classList.remove('chosen');

    item.classList.add('chosen');

    var whichTheme = item.dataset.theme;
    linkTheme.href = whichTheme;
});

});

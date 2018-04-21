/*-------------------------------------
| Your Script Solution Goes here.
-------------------------------------*/
console.log('This is only seen by us.');

window.onload =function(){

var  bubbles = document.querySelectorAll('img.bubble');
var features = document.querySelectorAll('div.feature');

bubbles[0].classList.remove('on');
bubbles[1].classList.remove('on');
bubbles[2].classList.remove('on');


features[0].addEventListener('mouseover',function(){
  console.log('Ouch you mouseovered me.');
  bubbles[0].classList.add('on');
});

features[0].addEventListener('mouseout',function(){
  console.log('Ouch you mouseouted me.');
  bubbles[0].classList.remove('on');
});


features[1].addEventListener('mouseover',function(){
  console.log('Ouch you mouseovered me.');
  bubbles[1].classList.add('on');
});

features[1].addEventListener('mouseout',function(){
  console.log('Ouch you mouseouted me.');
  bubbles[1].classList.remove('on');
});


features[2].addEventListener('mouseover',function(){
  console.log('Ouch you mouseovered me.');
  bubbles[2].classList.add('on');
});

features[2].addEventListener('mouseout',function(){
  console.log('Ouch you mouseouted me.');
  bubbles[2].classList.remove('on');
});







};//this is where the window.onload ends

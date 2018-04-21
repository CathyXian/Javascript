/*-------------------------------------
| Your Script Solution Goes here.
-------------------------------------*/
console.log('This is only seen by us.');

window.onload =function(){

var items = document.querySelectorAll('.item');
var  descs = document.querySelectorAll('.desc');
var texts = document.querySelectorAll('.text');


//console.log(descs);
//console.log(descs[0]);
//console.log(descs[1]);
//console.log(descs[2]);
//console.log(descs[3]);
//console.log(descs[5]);

items[0].addEventListener('click',function(){
  console.log('Ouch you clicked me');
  texts[0].classList.toggle('on');
  descs[0].classList.toggle('on');

});

items[1].addEventListener('click',function(){
  console.log('Ouch you clicked me');
  texts[1].classList.toggle('on');
  descs[1].classList.toggle('on');

});

items[2].addEventListener('click',function(){
  console.log('Ouch you clicked me');
  texts[2].classList.toggle('on');
  descs[2].classList.toggle('on');

});

items[3].addEventListener('click',function(){
  console.log('Ouch you clicked me');
  texts[3].classList.toggle('on');
  descs[3].classList.toggle('on');

});

items[4].addEventListener('click',function(){
  console.log('Ouch you clicked me');
  texts[4].classList.toggle('on');
  descs[4].classList.toggle('on');

});

items[5].addEventListener('click',function(){
  console.log('Ouch you clicked me');
  texts[5].classList.toggle('on');
  descs[5].classList.toggle('on');

});











};//this is where the window.onload ends

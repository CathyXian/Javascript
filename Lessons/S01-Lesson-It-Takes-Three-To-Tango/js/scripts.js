///alert('You linked to me.');
console.log('This is only seen by us.');

window.onload =function(){

var  orbs = document.querySelectorAll('.orb');

console.log(orbs);
console.log(orbs[0]);
console.log(orbs[1]);
console.log(orbs[2]);
console.log(orbs[3]);

orbs[0].addEventListener('click',function(){
  console.log('Ouch you clicked me');
  orbs[0].classList.toggle('on');

});

orbs[0].addEventListener('mouseover',function(){
  console.log('Ouch you mouseovered me.');
  orbs[0].src='./img/sun.png';
});

orbs[0].addEventListener('mouseout',function(){
  console.log('Ouch you mouseouted me.');
  orbs[0].src='./img/sun.png';
});

orbs[1].addEventListener('click',function(){
  console.log('Ouch you clicked me');
  orbs[1].classList.toggle('on');

});

orbs[1].addEventListener('mouseover',function(){
  console.log('Ouch you mouseovered me.');
  orbs[1].src='./img/sun.png';
});

orbs[1].addEventListener('mouseout',function(){
  console.log('Ouch you mouseouted me.');
  orbs[1].src='./img/sun.png';
});

orbs[2].addEventListener('click',function(){
  console.log('Ouch you clicked me');
  orbs[2].classList.toggle('on');

});

orbs[2].addEventListener('mouseover',function(){
  console.log('Ouch you mouseovered me.');
  orbs[2].src='./img/sun.png';
});

orbs[2].addEventListener('mouseout',function(){
  console.log('Ouch you mouseouted me.');
  orbs[2].src='./img/sun.png';
});

orbs[3].addEventListener('click',function(){
  console.log('Ouch you clicked me');
  orbs[3].classList.toggle('on');

});

orbs[3].addEventListener('mouseover',function(){
  console.log('Ouch you mouseovered me.');
  orbs[3].src='./img/sun.png';
});

orbs[3].addEventListener('mouseout',function(){
  console.log('Ouch you mouseouted me.');
  orbs[3].src='./img/sun.png';
});



};//this is where the window.onload ends

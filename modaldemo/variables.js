const name='test';
const nuber =5;
//почистил картошку
//помыл картоку
//включил плиту
//поставил воду 
//бросил в воду картошку
//дождался когда картошка приготовилась 
//выключил плиту 
// поел
function peelPotato(){ 
console.log('почистил картошку');
}
function woshPotato(){
  console.log('помыл картоку');
}
function turnOnStove(){
  console.log('включил плиту');
}
function putWater(){
  console.log('поставил воду ');
}
function throwPotato(){
  console.log('бросил в воду картошку');
}
function waitPotato(){
  console.log('дождался когда картошка приготовилась');
}
function turnOffStove(){
  console.log('выключил плиту');
}
function eat(){
  console.log(' поел');
}

function dinner(){
  peelPotato();
  woshPotato();
  turnOnStove();
  putWater();
  throwPotato();
  waitPotato();
  turnOffStove();
  eat();

}
dinner();
const name = 'test';
const nuber = 5;
//почистил картошку
//помыл картоку
//включил плиту
//поставил воду 
//бросил в воду картошку
//дождался когда картошка приготовилась 
//выключил плиту 
// поел
function peelPotato(potato) {
  say('почистил ' + potato.toText(),'odd');
}
function washPotato(potato) {
  say('помыл ' + potato.toText(),'even');
}
function turnOnStove() {
  say('включил плиту','odd');
}
function putWater() {
  say('поставил воду ','even');
}
function throwPotato(potato) {
  say('бросил в воду ' + potato.toText(),'odd');
}
function waitPotato() {
  say('дождался когда картошка приготовилась','even');
}
function turnOffStove() {
  say('выключил плиту','odd');
}
function eat(potato) {
  say(' поел ' + potato.toText(),'even');
}
function say(text,cssClass) {
  $('#content').append(`<div class="card ${cssClass}"> <div class="card-body">${text}</div></div>`);

}

function dinner() {
  let potato = {
    name: 'картошка',
    count: 5,
    toText: function () {
      return this.name + ' ' + this.count + ' штук'
    }

  };
  peelPotato(potato);
  washPotato(potato);
  turnOnStove();
  putWater();
  throwPotato(potato);
  waitPotato();
  turnOffStove();
  eat(potato);

}


dinner();


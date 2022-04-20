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
  say('почистил ' + potato.toText());
}
function washPotato(potato) {
  say('помыл ' + potato.toText());
}
function turnOnStove() {
  say('включил плиту');
}
function putWater() {
  say('поставил воду ');
}
function throwPotato(potato) {
  say('бросил в воду ' + potato.toText());
}
function waitPotato() {
  say('дождался когда картошка приготовилась');
}
function turnOffStove() {
  say('выключил плиту');
}
function eat(potato) {
  say(' поел ' + potato.toText());
}
function say(text) {
  $('#content').append(`<div class="card"> <div class="card-body">${text}</div></div>`);

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


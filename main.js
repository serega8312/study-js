// мы хотим работать с отрисованым html документом 
// чтоб мы работали с  html ЭЛЕМЕНТАМИ
// для этого нужно обработать событие рейди у обьекта документ 
//  $(document)  jqerry обертка
// рейди это функция  в которую передаетя безимянная функция
$(document).ready(function () {

  // оброботчик события клик  на html элементс айди revers (пункт-меню) '#revers'
  //'#revers' пример css селектора по айди
  $('#revers').click(function () {
    const bla = $('#talktext').val();
    const rev = reverseString(bla);
    $("#talkh1").text(rev);

  })

  $('#talk').click(function () {
    const bla = $('#talktext').val();
    $("#talkh1").text(bla);


  })
  $('#changeDisplay').click(function () {
    $('#content').html("");
    $('#content').addClass('change-display');
    changeDisplay();
  })
  $('#dinner').click(function () {
    $('#content').removeClass();
    $('#content').html("");
    dinner();
  })
  $('#modaldemo').click(function () {
    $('#content').load("modaldemo/modal.html");
  })
  $('#posts').click(function () {
    $('#content').removeClass();
    $.getJSON("http://jsonplaceholder.typicode.com/posts", function (json) {
      $('#content').html("");
      for (let i in json) {
        let post = json[i];
        $('#content').append(`<div class="card"> <div class="card-body">${post.body}</div></div>`);

      }
    });
  })

});

function say(text, cssClass) {
  if (!cssClass) {
    $('#content').append(`<div class="card"> <div class="card-body">${text}</div></div>`);

  }
  else {
    $('#content').append(`<div class="card ${cssClass}"> <div class="card-body">${text}</div></div>`);
  }


}

function reverseString(str) {
  return str.split("").reverse().join("");
}

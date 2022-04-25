$(document).ready(function () {


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
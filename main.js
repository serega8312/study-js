$(document).ready(function () {
  $('#changeDisplay').click(function () {
    $('#content').html("");
    changeDisplay();
  })
  $('#dinner').click(function () {
    $('#content').html("");
    dinner();
  })
  $('#modaldemo').click(function () {
    $('#content').load("modaldemo/modal.html");
  })
  $('#posts').click(function () {
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
  $('#content').append(`<div class="card ${cssClass}"> <div class="card-body">${text}</div></div>`);

}
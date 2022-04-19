$(document).ready(function () {
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

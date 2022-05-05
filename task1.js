const words = ['time', 'love', 'there'];


$(document).ready(function () {



  $('#check').click(function () {

    for (let i in words) {
      check('#input' + i, words[i]);
    }
  })



})


function check(inputId, rightValue) {
  const input = $(inputId);
  if (input.val().toLowerCase().trim() == rightValue) {
    input.addClass('bg-success');
  }
  else {
    input.addClass('bg-danger');
  }
}

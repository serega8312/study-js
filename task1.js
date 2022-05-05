$(document).ready(function () {


  $('#check').click(function () {
    check('#input0', 'time');
    check('#input1', 'love');
    check('#input2', 'there');
  })
})

function check(inputId, rightValue) {
  const input = $(inputId);
  if (input.val() == 'time') {
    input.addClass('bg-success');
  }
  else {
    input.addClass('bg-danger');
  }
}
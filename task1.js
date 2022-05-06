const words = ['time', 'love', 'there', 'chance'];


$(document).ready(function () {

  $('#check').click(function () {

    for (let i in words) {
      check('#input' + i, words[i]);
    }
    
  })



})

function line(id,label){
  $('#content').prepend(`
  <div class="form-group row mb-1">
    <label for="staticEmail" class="col-sm-1 col-form-label">${label}</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="${id}">
    </div>
  </div>`);
}
line('input0','Время');
line('input1','Любовь');
line('input2','Там');
line('input3','Шанс');

function check(inputId, rightValue) {
  const input = $(inputId);
  if (input.val().toLowerCase().trim() == rightValue) {
    input.addClass('bg-success');
  }
  else {
    input.addClass('bg-danger');
  }
}



const lines = ['Время~time', 'Любовь~love', 'Там~there', 'Шанс~chance', 'Сдача~change'];

$(document).ready(function () {

  for (let i in lines.reverse()) {
    line('input' + i, lines[i].split('~')[0]);
  }

  $('#check').click(function () {

    for (let i in lines) {
      check('#input' + i, lines[i].split('~')[1]);
    }

  })



})

function line(id, label) {
  $('#content').prepend(`
  <div class="form-group row mb-1">
    <label for="staticEmail" class="col-sm-1 col-form-label">${label}</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="${id}">
    </div>
  </div>`);

}

function check(inputId, rightValue) {
  const input = $(inputId);
  if (input.val().toLowerCase().trim() == rightValue) {
    input.addClass('bg-success');
  }
  else {
    input.addClass('bg-danger');
  }
}


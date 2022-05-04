$(document).ready(function () {

 
  $('#check').click(function () {
    if($('#input0').val()=='time'){
      $('#input0').addClass('bg-success');
    }
    else{
      $('#input0').addClass('bg-danger');
    }
    
    if($('#input1').val()=='love'){
      $('#input1').addClass('bg-success');
    }
    else{
      $('#input1').addClass('bg-danger');
    }

  })
})
// Initialized for modal, sidenav menu with Jquery

$(document).ready(function(){
  $('.modal').modal();
  $('.sidenav').sidenav();
});
       

function toggleModal(){
  var instance = M.Modal.getInstance($('#modal3'))
  instance.open();
}


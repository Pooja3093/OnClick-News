// Initialized for modal, sidenav, drop down menu with Jquery

$(document).ready(function(){
  $('.modal').modal();
  $('.sidenav').sidenav();
  $('.dropdown-trigger').dropdown();
});
       

function toggleModal(){
  var instance = M.Modal.getInstance($('#modal3'))
  instance.open();
}


$(document).keyup(function(event) {
  event.preventDefault();
  console.log('key: ', event.keyCode);
  if (event.keyCode == 83) {
    $('.students').toggleClass('hide');
  }
});
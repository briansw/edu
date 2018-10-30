$('.nav-item').click(function() {
  var button_name = $(this).data('button');
  
  $('.about-text').addClass('hide');
  $('.nav-item').removeClass('active');
  $('.content').attr('class', 'column content');
  $(this).addClass('active');
  $('.content').addClass(button_name);
  
  if (button_name == 'beyonce') {
    $('.slay').removeClass('hide');
    $('audio')[0].play();
  } else if (button_name == 'about') {
    $('.about-text').removeClass('hide');
  }

});

$('.close').click(function() {
  $('.slay').addClass('hide');
  $('audio')[0].pause();
  $('.nav-item').removeClass('active');
});
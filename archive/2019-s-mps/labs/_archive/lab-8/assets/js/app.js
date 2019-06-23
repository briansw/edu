$('.button').click(function() {
  var objects = ['assets/img/bunny.jpg',
                 'assets/img/cat.jpg',
                 'assets/img/dog.jpg',
                 'assets/img/sloth.jpg',
                 'assets/img/circle.png',
                 'assets/img/triangle.png',
                 'assets/img/square.jpg',
                 'Meow',
                 'Meep',
                 'Woof',
                 '...'
                ];

  var colors = ['red',
                'green',
                'blue'
               ];

  var random_object_number = Math.floor(Math.random() * objects.length);
  var random_color_number = Math.floor(Math.random() * colors.length);
  var object_to_use = objects[random_object_number];
  var color_to_use = colors[random_color_number];
  var result = '';

  if (random_object_number < 7) {
    result = '<div class="object"><img src="' + object_to_use + '" /></div>';
  } else {
    result = '<div class="object ' + color_to_use + '">' + object_to_use + '</div>';
  }

  $('.content').prepend(result);
});






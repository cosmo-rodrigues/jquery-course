$(function() {
  $('#text').text('Hello World!!!');

  $('#sumButton').on('click', function() {
    const number01 = parseInt($('#number01').val());
    const number02 = parseInt($('#number02').val());
    const result = number01 + number02;
    if (result) $('#result').text(result);
  });

  $('#previousButton').text('<');
  $('#nextButton').text('>');

  const images = ['./img/anakin-vader.jpg', './img/leon.jpg', './img/umbrela-monkie.jpg', '/img/yoda.jpg'];

  const maxImages = images.length - 1;
  let index = 0;

  $('#banner').css('background-image', `url(${images[index]})`);

  function onChange(optin) {
    $('#banner')
      .css('background-image', `url(${images[index]})`)
      .fadeOut(500, function() {
        index += optin;
        if(index > maxImages) {
          index = 0;
        } else if(index < 0){
          index = maxImages;
        }
        $('#banner')
          .css('background-image', `url(${images[index]})`)
          .fadeIn(500);
      });
  }

  $('#previousButton').on('click', function() {
    onChange(-1);
  });

  $('#nextButton').on('click', function() {
    onChange(1);
  });

  $('#slideTitle').fadeOut('slow').fadeIn('slow');

  $('ul').css('background-color', 'red');

  $('ul .text-01').css('background-color', 'black');
  $('ul .text-03').css('background-color', 'blue');
  $('ul .text-05').css('background-color', 'blue');

  $('a[target=_blank]').css('font-size', '60px')
    .css('text-decoration', 'none');

});
(function($){
  // variables
  elementWidth = $('ul').width(),
  containerWidth = $('nav').width(),
  difference = elementWidth-containerWidth,
  finalWidth = difference * 1.5,
  element = $('ul');
  
  // active on click
  $('li').on('click', function(){
    $('li').removeClass('active');
    $(this).addClass('active');
  });
  
})(jQuery);

$(document).ready(function() {
    $('#homeTab').show(1000);
    $('#aboutTab').hide();
    $('#portTab').hide();
    $('#workTab').hide();
    $('#contractTab').hide();
  $('form input').focus(function() {
    $('form input').css('color', 'white');
  })
  $('form textarea').focus(function() {
    $('form textarea').css('color', 'white')
  })



  $('#homeLink').click(function() {
    $('#homeTab').show();
    $('#aboutTab').hide();
    $('#portTab').hide();
    $('#workTab').hide();
    $('#contractTab').hide();
  })
  $('#aboutLink').click(function() {
     $('#homeTab').hide();
    $('#aboutTab').show();
    $('#portTab').hide();
    $('#workTab').hide();
    $('#contractTab').hide();
  })
  $('#portLink').click(function() {
     $('#homeTab').hide();
    $('#aboutTab').hide();
    $('#portTab').show();
    $('#workTab').hide();
    $('#contractTab').hide();
  })
  $('#workLink').click(function() {
     $('#homeTab').hide();
    $('#aboutTab').hide();
    $('#portTab').hide();
    $('#workTab').show();
    $('#contractTab').hide();
  })
  $('#contractLink').click(function() {
     $('#homeTab').hide();
    $('#aboutTab').hide();
    $('#portTab').hide();
    $('#workTab').hide();
    $('#contractTab').show();
  })
  $('#aboutLinkToContact').click(function() {
    $('ul li').addClass('active');
    $('#homeTab').hide();
    $('#aboutTab').hide();
    $('#portTab').hide();
    $('#workTab').hide();
    $('#contractTab').show();
  })

})
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
})
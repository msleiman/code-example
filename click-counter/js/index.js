 var clickCount = 0;
 $('.button').each(function() {
   $(this).click(function() {
     var value = $(this).find('button').attr('value');
     var clicks = $(this).find('label').html();
     clickCount++;
     $(this).find('button').addClass('active');
     $(this).find('label').html(+clickCount);
     if (value === clicks) {
       clickCount = 0
       $(this).find('button').attr("disabled", "disabled");
       $(this).find('button').addClass('disabled');
       $(this).find('button').text('No More!');
     }
   });
 });

$('#reset').click(function() {
    $( "label" ).empty();
    $('button').removeAttr("disabled", "disabled");
    $('button').removeClass('active');
    $('button').removeClass('disabled');
    $('.btn').text('Click me')
  

});
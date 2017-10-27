$('.video').click(function(){
  $(this).find(".videoPlaceholder").css('display', 'none');
  $(this).find(".videosource").css('display', 'block').prop('autoplay', true);
  $(this).find('.videosource')[0].play();
    
})
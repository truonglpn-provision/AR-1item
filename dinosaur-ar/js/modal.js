$(function () {
    $('#openModal').click(function(){
        $('#modalArea').fadeIn();
        $('html, body').css('overflow', 'hidden');
    });
    $('#closeModal , #modalBg').click(function(){
      $('#modalArea').fadeOut();
      $('html, body').removeAttr('style');
    });
  });
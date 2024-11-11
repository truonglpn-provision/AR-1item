$(function () {
  $('#openModal').click(function(){
      $('#modalArea').fadeIn();
      $('#modal').scrollTop(0);
      // 背景を固定してスクロールさせない
    // $('html, body').css('overflow-y', 'hidden');
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea').fadeOut();
    $('html, body').css('overflow-y', 'scroll');
  });
  $('#uncollect_closeModal , #modalBg').click(function(){
    $('#uncollect_modalArea').fadeOut();
    // $('html, body').css('overflow-y', 'scroll');
  });
});
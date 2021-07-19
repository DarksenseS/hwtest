const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
  });
  $('input:checkbox').click(function(){
    if ($(this).is(':checked')) {
      $(this).parent().css('color', '#C283F3');
    } else {
      $(this).parent().css('color', '#fff');
    }
  });
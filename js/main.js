//owl carousel
$(document).ready(function(){
    $(".banner-slider").owlCarousel({
        items:1,
        loop:true,
        dots: false,
        nav:true,
        navText:['<i class="fas fa-chevron-up"></i>','<i class="fas fa-chevron-down"></i>']
    });
    $(".product-slider").owlCarousel({
        items:1,
        stagePadding: 50,
        margin:10
    });
    //wow.js
    new WOW().init();
    //back to top
$(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#back-to-top').fadeIn();
    } else{
      $('#back-to-top').fadeOut();
    }
  });
  
  $("#back-to-top").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
  
});

$(".single-item").slick({

   arrows: true,
   fade: true,
   dots:true,
   adaptiveHeight: true,

 });

 $('.slider-container').slick({
  slidesToShow: 2,
  rows: 2,


  



  

});

 $('.slider-nav').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   dots: true,
   focusOnSelect: true
   
 });


 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slider-nav').slick('slickGoTo', slideno - 1);
 });
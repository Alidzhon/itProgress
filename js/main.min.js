jQuery(document).ready(function() {

     var header = $('.header');
     var nav = $('.nav--header');

     window.onscroll = function () {
         if(window.pageYOffset > header.height()) {
             nav.addClass('nav--move');
         } else {
             nav.removeClass('nav--move');
         }
     }

     $('#mc-form').ajaxChimp({
        url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9'
    });

     $(document).on('click', '.burger', function() {
         $(this).toggleClass('is-active');
         $('.header__nav-wrap').toggleClass('is-active');
     });

});
(function ($) {
  'use strict';


  $(window).on('load', function () {

    // Page Nav
    var onePageScrolling = (function () {
      $('.js-scroll-nav .link').on('click', function(event) {
        event.preventDefault();
        if ( $('.top-nav').length ) {
          $('html, body').animate( {scrollTop:( $('#' + this.href.split('#')[1]).offset().top - ( $('.top-nav').height() ) - 30 )}, 600 );
        } else {
          $('html, body').animate( {scrollTop:( $('#' + this.href.split('#')[1]).offset().top - 30 )}, 600 );
        }
      });
    }());

    var oneAnchorScrolling = (function () {
      $('.js-anchor-link').on('click', function(event) {
        event.preventDefault();
        if ( $('.top-nav').length ) {
          $('html, body').animate( {scrollTop:( $('#' + this.href.split('#')[1]).offset().top - ( $('.top-nav').height() ) - 30 )}, 600 );
        } else {
          $('html, body').animate( {scrollTop:( $('#' + this.href.split('#')[1]).offset().top - 30 )}, 600 );
        }
      });
    }());
  });
})(jQuery);

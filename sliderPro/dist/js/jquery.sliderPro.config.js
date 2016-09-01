jQuery.noConflict();
(function($) {
    $(function() {
      $( '#aideshop-article' ).sliderPro({
        width: '100%',
        height: '100%',
        orientation: 'horizontal',
        loop: false,
        arrows: true,
        buttons: false,
        autoplay:false,
        touchSwipe:true,
        arrows:true,
        thumbnailsPosition: 'bottom',
        thumbnailPointer: true,
        thumbnailWidth: 350,
        thumbnailHeight:170,
        imageScaleMode:'contain',
        autoHeight:true,
        fade:true,
        breakpoints: {
          1200: {
            thumbnailsPosition: 'bottom',
            thumbnailWidth: 350,
            thumbnailHeight: 170
          },
          800: {
            thumbnailsPosition: 'bottom',
            thumbnailWidth: 350,
            thumbnailHeight: 170
          },
          500: {
            thumbnailsPosition: 'bottom',
            thumbnailWidth: 120,
            thumbnailHeight: 170
          }
        }
      });
    });
})(jQuery);

(function ($) {
  'use strict';

  $(document).on('ready', function () {
    // Autocomplete
    $('.js-search').each(function (i, el) {
      var $this = $(el),
        dataUrl = $this.data('url');

      $.getJSON(dataUrl, function (data) {
        $this.localcatcomplete({
          appendTo: $this.parent(),
          delay: 0,
          source: data,
          select: function (event, ui) {
            window.location = window.location.protocol + '//' + window.location.host + ui.item.url;
          }
        });
      });
    });
  });
})(jQuery);

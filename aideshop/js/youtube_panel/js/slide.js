
  $(document).ready(function() {
      $('<audio controls id="au-002"><source src="https://k236740.github.io/pixnet/aideshop/js/youtube_panel/002.ogg" type="audio/ogg"><source src="https://k236740.github.io/pixnet/aideshop/js/youtube_panel/002.mp3" type="audio/mpeg"></audio>').appendTo('body');
  		$('<audio controls id="au-003"><source src="https://k236740.github.io/pixnet/aideshop/js/youtube_panel/003.ogg" type="audio/ogg"><source src="https://k236740.github.io/pixnet/aideshop/js/youtube_panel/003.mp3" type="audio/mpeg"></audio>').appendTo('body');
      // Expand Panel
      $("#as-youtube-open,#ay-open").click(function() {
          $("div#as-youtube-panel").slideDown("slow");
          $('#au-002')[0].play(); //播放聲音
          // $.playSound("002");
      });

      // Collapse Panel
      $("#as-youtube-close,#ay-close").click(function() {
          $("div#as-youtube-panel").slideUp("slow");
          $('#au-003')[0].play(); //播放聲音
          // $.playSound("003");
      });

      // Switch buttons from "Log In | Register" to "Close Panel" on click
      $("#as-youtube-toggle a").click(function() {
          $("#as-youtube-toggle a").toggle();
      });
  });

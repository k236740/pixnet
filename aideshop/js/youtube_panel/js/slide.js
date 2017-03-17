$(document).ready(function() {
    $('<audio controls id="au-002"><source src="https://od.lk/s/OTJfMTg3MzQ1N18/002.ogg" type="audio/ogg"><source src="https://od.lk/s/OTJfMTg3MzQ1N18/002.mp3" type="audio/mpeg"></audio>').appendTo('body');
		$('<audio controls id="au-003"><source src="https://od.lk/s/OTJfMTg3MzQ1OV8/003.ogg" type="audio/ogg"><source src="https://od.lk/s/OTJfMTg3MzQ1OV8/003.mp3" type="audio/mpeg"></audio>').appendTo('body');
    // Expand Panel
    $("#as-youtube-open").click(function() {
        $("div#as-youtube-panel").slideDown("slow");
        $('#au-002')[0].play(); //播放聲音
        // $.playSound("002");
    });

    // Collapse Panel
    $("#as-youtube-close").click(function() {
        $("div#as-youtube-panel").slideUp("slow");
        $('#au-003')[0].play(); //播放聲音
        // $.playSound("003");
    });

    // Switch buttons from "Log In | Register" to "Close Panel" on click
    $("#as-youtube-toggle a").click(function() {
        $("#as-youtube-toggle a").toggle();
    });
});

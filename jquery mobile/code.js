$(document).on("mobileinit", function(){


		$(function(){


	        $("body").bind("swipeleft", function(e) {
            $.mobile.changePage( '#dialog', { transition: "slide" });
			});

			$("body").bind("swiperight", function(e) {
            $.mobile.changePage( '#info', { transition: "slide" });
			});

		});

});
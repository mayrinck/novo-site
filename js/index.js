$(document).ready(function(){
  $(".goTop").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 400);
	});
	
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 100) {
			$(".goTop").fadeIn();
            $(".first").css("padding-top", "79px");
            $("header").addClass("detach");
		} else {
            $(".first").css("padding-top", "0px");
            $("header").removeClass("detach");
			$(".goTop").fadeOut();
		}
	}); 
});
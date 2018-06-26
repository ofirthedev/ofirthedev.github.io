

var myNav = document.getElementById('navbar');
$(document).ready(function() {
	 //hide your div initially

	var topOfOthDiv = $("#home").offset().top;
	$(window).scroll(function() {
		if ($(window).scrollTop() > 200) { //scrolled past the other div?
			$("#myID").show(200);
			

			$("#navbarchange").animate( { "opacity": "show"} , 200 );
			//reached the desired point -- show div
		} else {
			$("#myID").hide(200);

			$("#navbarchange").animate( { "opacity": "hide"} , 200 );
			
			//reached the desired point -- show div
		}
	});
	$(document).ready(function () {
    $(window).scroll(function () {

        var y = $(this).scrollTop();

        $('.link').each(function (event) {
            if (y >= $($(this).attr('href')).offset().top - 40) {
                $('.link').not(this).removeClass('navbar-active');
                $(this).addClass('navbar-active');
            }
        });

    });
});
	$(document).ready(function() {
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();
				// Store hash
				var hash = this.hash;
				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function() {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				});
			} // End if
		});
	});
});
$(window).resize(function() {
 if ($(window).width() > 750) {
	 $(".accordionContent").css("display", "none");
	 
 }

});
function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function(){

	if (isScrolledIntoView('.designimage') === true) {
		


		$('.designimage').addClass('animated fadeInUp');


	}
	if (isScrolledIntoView('.hiddendevelop') === true || 

	isScrolledIntoView('.developimage') === true) {
		

		$('.hiddendevelop').addClass('animated fadeInUp');

		$('.developimage').addClass('animated fadeInUp');

	}

});
$(document).ready(function () {
	$('.menu_burger').click(function (event) {
		$('.menu_burger,.menu_body').toggleClass('active');
		$('body').toggleClass('lock');
		$('.overflow').toggleClass('lock');
	});
});

function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();
$(document).ready(function () {

	$("#header").removeClass("default");
	$(window).scroll(function () {
		if ($(this).scrollTop() > 800) {
			$('#header').addClass("default").fadeIn('fast');
		} else {
			$('#header').removeClass("default").fadeIn('fast');
		};
	});
});

$(document).ready(function () {
	$('.slider__body').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		infinite: true,
		initialSlide: 0,
		autoplay: false,
		autoplaySpeed: false,
		dots: true,
		arrows: false,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {

				}

			},

		]

	});
});
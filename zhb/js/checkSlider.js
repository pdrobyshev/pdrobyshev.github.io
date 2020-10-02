function checkSlider() {
	if ($(window).outerWidth() >= 1360) {
		if ($('.intro-slider__item').parent().is('.intro-slider')) {
			$('.intro-slider__item').unwrap();
		}
	} else {
		if (!$('.intro-slider__item').parent().is('.intro-slider')) {
			$('.intro-slider__item').wrapAll('<ul class="intro-slider"></ul>');
		}
	}
}

$(document).ready(function () {
	checkSlider();
});

$(window).on('resize', function () {
	checkSlider();
});

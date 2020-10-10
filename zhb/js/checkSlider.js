function initSlider() {
	$('.intro-slider').flickity({
		cellAlign: 'center',
		contain: true,
		pageDots: false,
		prevNextButtons: false,
		watchCSS: true
	});
}

function checkSlider() {
	if ($(window).outerWidth() >= 1360) {
		if ($('.intro-slider__item').parent().is('.intro-slider')) {
			$('.intro-slider__item').unwrap();
		}
	} else {
		if (!$('.intro-slider__item').closest('.intro-slider').length > 0) {
			$('.intro-slider__item').wrapAll('<ul class="intro-slider"></ul>');
			initSlider();
		}
	}
}

$(document).ready(function () {
	initSlider();
	checkSlider();
});

$(window).on('resize', function () {
	checkSlider();
});

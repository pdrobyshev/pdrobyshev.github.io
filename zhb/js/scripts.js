"use strict";

$('#menu-open-btn').on('click', function () {
	$('.main-nav').addClass('active');
});

$('#menu-close-btn').on('click', function () {
	$('.main-nav').removeClass('active');
});

$('.main-nav').on('click', function (e) {
	if ($(e.target).is('.main-nav')) {
		$('.main-nav').removeClass('active');
	}
});

"use strict";

$('.call__modal-btn').on('click', function () {
	$('.modal--call').show();
	$('.modal--call').addClass('modal--fixed');
	$('body').addClass('body-overflow');
});

function checkHeight() {
	if ($(window).height() < 715) {
		$('.first-frame').addClass('first-frame--auto-height');
	} else {
		$('.first-frame').removeClass('first-frame--auto-height');
	}
}

$(document).ready(function () {
	checkHeight();
});

$(window).on('resize', function () {
	checkHeight();
});

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

$(document).on('click', function () {
	if ($('.datepicker').length) {
		$('#dateTo').blur();
		$('#dateToSend').blur();
	}
});

"use strict";

$('.deliver-modal-btn').on('click', function () {
	$('.modal--delivery').show();

	if ($(window).width() >= 1360 && $(window).height() >= 1000) {
		$('.modal--delivery  .modal-form').addClass('modal-form--centered');
		$('.modal--delivery').addClass('modal--fixed');
		$('body').addClass('body-overflow');
	} else {
		$('html').css('height', 'auto');
		$('html, body').animate({scrollTop: 0}, 0);
	}
});

$('.field-select--delivery-contacts').on('change', function () {
	let optionValue = $(this).find($('option:selected')).text();
	if (optionValue === 'Whatsapp') {
		$(this).closest($('.fields-wrapper')).find($('.field-text--contacts')).hide();
		$(this).closest($('.fields-wrapper')).find($('.field-text--contacts input')).hide();
		$(this).closest($('.fields-wrapper')).find($('.field-text--phone-number')).show();
		$(this).closest($('.fields-wrapper')).find($('.field-text--phone-number input')).show();
	} else {
		$(this).closest($('.fields-wrapper')).find($('.field-text--phone-number')).hide();
		$(this).closest($('.fields-wrapper')).find($('.field-text--phone-number input')).hide();
		$(this).closest($('.fields-wrapper')).find($('.field-text--contacts')).show();
		$(this).closest($('.fields-wrapper')).find($('.field-text--contacts input')).show();
	}
});

$('.field-select--delivery-city-from').on('change', function () {
	let cityFrom = $(this).find('option:selected').text();

	$('.field-select--delivery-city-to option').each(function () {
		if ($(this).text() === cityFrom) {
			$(this).attr('disabled', true);
		} else {
			$(this).attr('disabled', false);
		}
	});
});

$('.field-select--delivery-city-to').on('change', function () {
	let cityFrom = $(this).find('option:selected').text();

	$('.field-select--delivery-city-from option').each(function () {
		if ($(this).text() === cityFrom) {
			$(this).attr('disabled', true);
		} else {
			$(this).attr('disabled', false);
		}
	});
});

/* MAIN PAGE SELECTS*/

$('.form-field-select--delivery-city-from').on('change', function () {
	let cityFrom = $(this).find('option:selected').text();

	$('.form-field-select--delivery-city-to option').each(function () {
		if ($(this).text() === cityFrom) {
			$(this).attr('disabled', true);
		} else {
			$(this).attr('disabled', false);
		}
	});
});

$('.form-field-select--delivery-city-to').on('change', function () {
	let cityFrom = $(this).find('option:selected').text();

	$('.form-field-select--delivery-city-from option').each(function () {
		if ($(this).text() === cityFrom) {
			$(this).attr('disabled', true);
		} else {
			$(this).attr('disabled', false);
		}
	});
});


"use strict";

$('.modal-form__close').on('click', function (e) {
	e.preventDefault();
	$('.modal').hide();
	$('body').removeClass('body-overflow');
	$('.yt-video').children('iframe').attr('src', '');
});

$(document).on('click', function (event) {
	if ($(event.target).is('.modal')) {
		$('.modal').hide();
		$('body').removeClass('body-overflow');
		$('.yt-video').children('iframe').attr('src', '');
	}
});

$(document).on('keydown', function (e) {
	if (e.keyCode === 27) {
		$('.modal').hide();
		$('body').removeClass('body-overflow');
		$('.main-nav').removeClass('active');
		$('.yt-video').children('iframe').attr('src', '');
	}
});

"use strict";

$(document).ready(function () {
	if ($(document).scrollTop() > 0) {
		$('.call-buttons__scroll').hide();
	} else {
		$('.call-buttons__scroll').show();
	}

	if ($(window).height() < 715) {
		$('.call-buttons__scroll').css('bottom', '-21px');
	}

	$(window).scroll(function () {
		if ($(window).width() < 1160 && $(window).height() >= 715) {
			if ($(document).scrollTop() > 0) {
				$('.call-buttons__scroll').hide();
			} else {
				$('.call-buttons__scroll').show();
			}
		} else if ($(document).scrollTop() > 200) {
			$('.call-buttons__scroll').hide();
		} else {
			$('.call-buttons__scroll').show();
		}
	});

	$('.to-top__button').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 0);
	});
});

"use strict";

$('.send-modal-btn').on('click', function () {
	$('.modal--send').show();

	if ($('#radio-other-input').is(':checked')) {
		$('.field-text--parcel').show();
	} else {
		$('.field-text--parcel').hide();
	}

	if ($(window).width() >= 1360 && $(window).height() >= 1000) {
		$('.modal--send  .modal-form').addClass('modal-form--centered');
		$('.modal--send').addClass('modal--fixed');
		$('body').addClass('body-overflow');
	} else {
		$('html').css('height', 'auto');
		$('html, body').animate({scrollTop: 0}, 0);
	}
});

$('.field-select--send-contacts').on('change', function () {
	let optionValue = $(this).find($('option:selected')).text();
	if (optionValue === 'Whatsapp') {
		$(this).closest($('.fields-wrapper')).find($('.field-text--contacts')).hide();
		$(this).closest($('.fields-wrapper')).find($('.field-text--contacts input')).hide();
		$(this).closest($('.fields-wrapper')).find($('.field-text--phone-number')).show();
		$(this).closest($('.fields-wrapper')).find($('.field-text--phone-number input')).show();
	} else {
		$(this).closest($('.fields-wrapper')).find($('.field-text--phone-number')).hide();
		$(this).closest($('.fields-wrapper')).find($('.field-text--phone-number input')).hide();
		$(this).closest($('.fields-wrapper')).find($('.field-text--contacts')).show();
		$(this).closest($('.fields-wrapper')).find($('.field-text--contacts input')).show();
	}
});

$('.field-select--send-city-from').on('change', function () {
	let cityFrom = $(this).find('option:selected').text();

	$('.field-select--send-city-to option').each(function () {
		if ($(this).text() === cityFrom) {
			$(this).attr('disabled', true);
		} else {
			$(this).attr('disabled', false);
		}
	});
});

$('.field-select--send-city-to').on('change', function () {
	let cityFrom = $(this).find('option:selected').text();

	$('.field-select--send-city-from option').each(function () {
		if ($(this).text() === cityFrom) {
			$(this).attr('disabled', true);
		} else {
			$(this).attr('disabled', false);
		}
	});
});

/* MAIN PAGE SELECTS*/

$('.form-field-select--send-city-from').on('change', function () {
	let cityFrom = $(this).find('option:selected').text();

	$('.form-field-select--send-city-to option').each(function () {
		if ($(this).text() === cityFrom) {
			$(this).attr('disabled', true);
		} else {
			$(this).attr('disabled', false);
		}
	});
});

$('.form-field-select--send-city-to').on('change', function () {
	let cityFrom = $(this).find('option:selected').text();

	$('.form-field-select--send-city-from option').each(function () {
		if ($(this).text() === cityFrom) {
			$(this).attr('disabled', true);
		} else {
			$(this).attr('disabled', false);
		}
	});
});

"use strict";

$('.subscribe-info__link').on('click', function (e) {
	e.preventDefault();
	$('.sub-form__input').focus();
	if ($('.sub-form__input').val() === '') {
		$('.sub-form__input').prop('placeholder', '');
	}
});

'use strict';

function showDescription() {
	$('#parcel-description').show();
	$('.field-text__textarea').focus();
}

function hideDescription() {
	$('#parcel-description').hide();
	$('.field-parcel_description_input').find('.help-block')[0].textContent = '';
}

$('.field-radio').on('click', '.field-radio__input', function () {
	if ($(this).is('#radio-other-input') && $(this).is(':checked')) {
		showDescription();
	} else {
		hideDescription();
	}
});

"use strict";

$(document).ready(function () {
	const src = $('.yt-video').children('iframe').attr('src');

	$('.how-works__button, .about-how-works__button').on('click', function () {
		if ($('.yt-video').children('iframe').attr('src') === '') {
			$('.yt-video').children('iframe').attr('src', src);
		}

		$('.modal--video').show();
		// $('html').css('height', 'auto');
		// var elmnt = document.querySelector('.yt-video');
		// elmnt.scrollIntoView();
		$('.modal--video').addClass('modal--fixed');
		$('body').addClass('body-overflow');
	});

	$(document).on('click', function (event) {
		if ($(event.target).is('.yt-video')) {
			$('.modal').hide();
			$('body').removeClass('body-overflow');
			$('.yt-video').children('iframe').attr('src', '');
		}
	});
});

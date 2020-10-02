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
	$('body').addClass('body-overflow');
});

"use strict";

$('.deliver-modal-btn').on('click', function () {
	$('.modal--delivery').show();

	if ($(window).width() < 1160) {
		$('html, body').animate({scrollTop: 0}, 300);
	} else {
		$('.modal--delivery  .modal-form').addClass('modal-form--centered');
		$('.modal--delivery').addClass('modal--fixed');
		$('body').addClass('body-overflow');
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

"use strict";

$('.how-works__button, .about-how-works__button').on('click', function () {
	$('.modal--video').show();
	$('body').addClass('body-overflow');
});

"use strict";

$('.modal-form__close').on('click', function () {
	$('.modal').hide();
	$('body').removeClass('body-overflow');
});

$(document).on('click', function (event) {
	if ($(event.target).is('.modal')) {
		$('.modal').hide();
		$('body').removeClass('body-overflow');
	}
});

$(document).on('keydown', function (e) {
	if (e.keyCode === 27) {
		$('.modal').hide();
		$('body').removeClass('body-overflow');
		$('.main-nav').removeClass('active');
	}
});

"use strict";

$('.send-modal-btn').on('click', function () {
	$('.modal--send').show();

	if ($(window).width() < 1160) {
		$('html, body').animate({scrollTop: 0}, 300);
	} else {
		$('.modal--send  .modal-form').addClass('modal-form--centered');
		$('.modal--send').addClass('modal--fixed');
		$('body').addClass('body-overflow');
	}
});

$('.field-select--contacts').on('change', function () {
	let optionValue = $(this).find($('.field-select--contacts option:selected')).text();
	if (optionValue === 'Whatsapp') {
		$('.field-text__input--contacts').attr('required', false);
		$('.field-text--contacts').hide();
		$('.field-text__input--phone').attr('required', true);
		$('.field-text--phone-number').show();
	} else {
		$('.field-text__input--phone').attr('required', false);
		$('.field-text--phone-number').hide();
		$('.field-text__input--contacts').attr('placeholder', optionValue);
		$('.field-text__input--contacts').attr('required', true);
		$('.field-text--contacts').show();
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

"use strict";

$('.subscribe-info__link').on('click', function (e) {
	e.preventDefault();
	$('.sub-form__input').focus();
});

'use strict';

function showDescription() {
	$('#parcel-description').show();
	$('.field-text__textarea').focus();
	$('.field-text__textarea').prop('required', true);
}

function hideDescription() {
	$('#parcel-description').hide();
	$('.field-text__textarea').prop('required', false);
}

$('.field-radio').on('click', '.field-radio__input', function () {
	if ($(this).is('#radio-other-input') && $(this).is(':checked')) {
		showDescription();
	} else {
		hideDescription();
	}
});

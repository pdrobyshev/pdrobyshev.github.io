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

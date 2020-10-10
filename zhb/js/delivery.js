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


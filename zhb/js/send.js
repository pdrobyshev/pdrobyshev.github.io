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

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

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

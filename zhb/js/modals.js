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

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

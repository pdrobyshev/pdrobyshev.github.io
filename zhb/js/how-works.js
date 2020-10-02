"use strict";

$('.how-works__button, .about-how-works__button').on('click', function () {
	$('.modal--video').show();
	$('body').addClass('body-overflow');
});

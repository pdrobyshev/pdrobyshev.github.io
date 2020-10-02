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

"use strict";

function hideScrollButton() {
	if ($(document).scrollTop() > 200) {
		$('.call-buttons__scroll').hide();
	} else {
		$('.call-buttons__scroll').show();
	}
}

$(document).ready(function () {
	hideScrollButton();

	$(window).scroll(function () {
		if ($(window).width() >= 1160) {
			hideScrollButton();
		}
	});

	$('.to-top__button').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 0);
	});
});

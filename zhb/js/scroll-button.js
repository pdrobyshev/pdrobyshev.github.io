"use strict";

$(document).ready(function () {
	if ($(document).scrollTop() > 0) {
		$('.call-buttons__scroll').hide();
	} else {
		$('.call-buttons__scroll').show();
	}

	if ($(window).height() < 715) {
		$('.call-buttons__scroll').css('bottom', '-21px');
	}

	$(window).scroll(function () {
		if ($(window).width() < 1160 && $(window).height() >= 715) {
			if ($(document).scrollTop() > 0) {
				$('.call-buttons__scroll').hide();
			} else {
				$('.call-buttons__scroll').show();
			}
		} else if ($(document).scrollTop() > 200) {
			$('.call-buttons__scroll').hide();
		} else {
			$('.call-buttons__scroll').show();
		}
	});

	$('.to-top__button').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 0);
	});
});

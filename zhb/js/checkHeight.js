function checkHeight() {
	if ($(window).height() < 780) {
		$('.first-frame').addClass('first-frame--auto-height');
	} else {
		$('.first-frame').removeClass('first-frame--auto-height');
	}
}

$(document).ready(function () {
	checkHeight();
});

$(window).on('resize', function () {
	checkHeight();
});

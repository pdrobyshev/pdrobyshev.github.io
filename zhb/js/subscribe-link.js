"use strict";

$('.subscribe-info__link').on('click', function (e) {
	e.preventDefault();
	$('.sub-form__input').focus();
	if ($('.sub-form__input').val() === '') {
		$('.sub-form__input').prop('placeholder', '');
	}
});

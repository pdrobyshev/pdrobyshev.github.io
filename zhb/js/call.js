"use strict";

$('.call__modal-btn').on('click', function () {
	$('.modal--call').show();
	$('.modal--call').addClass('modal--fixed');
	$('body').addClass('body-overflow');
});

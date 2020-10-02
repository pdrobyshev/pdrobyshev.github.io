'use strict';

function showDescription() {
	$('#parcel-description').show();
	$('.field-text__textarea').focus();
	$('.field-text__textarea').prop('required', true);
}

function hideDescription() {
	$('#parcel-description').hide();
	$('.field-text__textarea').prop('required', false);
}

$('.field-radio').on('click', '.field-radio__input', function () {
	if ($(this).is('#radio-other-input') && $(this).is(':checked')) {
		showDescription();
	} else {
		hideDescription();
	}
});

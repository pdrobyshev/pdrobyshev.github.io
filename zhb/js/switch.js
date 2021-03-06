'use strict';

function showDescription() {
	$('#parcel-description').show();
	$('.field-text__textarea').focus();
}

function hideDescription() {
	$('#parcel-description').hide();
	$('.field-parcel_description_input').find('.help-block')[0].textContent = '';
}

$('.field-radio').on('click', '.field-radio__input', function () {
	if ($(this).is('#radio-other-input') && $(this).is(':checked')) {
		showDescription();
	} else {
		hideDescription();
	}
});

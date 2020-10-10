$(document).on('click', function () {
	if ($('.datepicker').length) {
		$('#dateTo').blur();
		$('#dateToSend').blur();
	}
});

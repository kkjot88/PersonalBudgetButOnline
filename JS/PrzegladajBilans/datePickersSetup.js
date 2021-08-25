function daysInMonth(year, month) {
	return new Date(year, month + 1, 0).getDate();
}	

function datePickersSetup(year, currentMonth, numberOfDaysInCurrentMonth) {		

	$.datepicker.setDefaults($.datepicker.regional['pl']);
	$( "#datepickerFrom, #datepickerTo" ).datepicker({
		showOtherMonths: true,
		selectOtherMonths: true,
		nextText: "",
		prevText: "",
		//datepicker input filed loses/regains focus each time we click next/prev.
		//this lines of code serve to mimic permament focus styling while datepicker is opened
		beforeShow: function() {
			$(this).parent().css("color", "#ffffff");
			$(this).css("border-color", "#ffffff");
			$(this).hover(
			function() {$(this).css("border-color","#ffffff")}
			);
		},
		onClose: function() {
			$(this).parent().css("color", "#c0c0c0");
			$(this).css("border-color", "#c0c0c0");
			$(this).hover(
			function() {$(this).css("border-color","#ffffff")},
			function() {$(this).css("border-color","#c0c0c0")}
			);
		}
	});			
	$( "#datepickerFrom" ).datepicker().datepicker("setDate",new Date(year,currentMonth,1));
	$( "#datepickerTo" ).datepicker().datepicker("setDate",new Date(year,currentMonth,numberOfDaysInCurrentMonth));
}
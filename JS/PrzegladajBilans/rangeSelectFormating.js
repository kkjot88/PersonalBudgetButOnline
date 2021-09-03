function rangeSelectFormating (year, currentMonth, prevMonth, numberOfDaysInCurrentMonth, numberOfDaysInPrevMonth) {		
	
	$("#balanceRangeSelect").ready(function() {
				
		$("#datepickerFrom").prop('disabled', true).css({
		"color": "#6e6e6e", "border-color": "#6e6e6e"});
		$("label[for='datepickerFrom']").css("color", "#6e6e6e");				

		$("#datepickerTo").prop('disabled', true).css({
		"color": "#6e6e6e", "border-color": "#6e6e6e"});
		$("label[for='datepickerTo']").css("color", "#6e6e6e");	
	});	
						
	$("#balanceRangeSelect").on("change", function() {
		
		let range = $("#balanceRangeSelect").val();
		
		if (range != "niestandardowy") {
			$("#datepickerFrom").prop('disabled', true).css({
			"color": "#6e6e6e", "border-color": "#6e6e6e"});
			$("label[for='datepickerFrom']").css("color", "#6e6e6e");				
		
			$("#datepickerTo").prop('disabled', true).css({
			"color": "#6e6e6e", "border-color": "#6e6e6e"});
			$("label[for='datepickerTo']").css("color", "#6e6e6e");		

			if (range == "bieżący miesiąc") {					
				$( "#datepickerFrom" ).datepicker().datepicker("setDate",new Date(year,currentMonth,1));
				$( "#datepickerTo" ).datepicker().datepicker("setDate",new Date(year,currentMonth,numberOfDaysInCurrentMonth));				
			}
			else if (range == "poprzedni miesiąc") {					
				$( "#datepickerFrom" ).datepicker().datepicker("setDate",new Date(year,prevMonth,1));
				$( "#datepickerTo" ).datepicker().datepicker("setDate",new Date(year,prevMonth,numberOfDaysInPrevMonth));				
			}
			else if (range == "bieżący rok") {					
				$( "#datepickerFrom" ).datepicker().datepicker("setDate",new Date(year,0,1));
				$( "#datepickerTo" ).datepicker().datepicker("setDate",new Date(year,11,31));				
			}					
		}
		else {
			$("#datepickerFrom").prop('disabled', false).css({
			"color": "#ffffff", "border-color": "#c0c0c0"});
			$("label[for='datepickerFrom']").css("color", "#c0c0c0");				
		
			$("#datepickerTo").prop('disabled', false).css({
			"color": "#ffffff", "border-color": "#c0c0c0"});
			$("label[for='datepickerTo']").css("color", "#c0c0c0");

			$( "#datepickerFrom" ).datepicker().datepicker("setDate",new Date(year,currentMonth,1));
			$( "#datepickerTo" ).datepicker().datepicker("setDate",new Date(year,currentMonth,numberOfDaysInCurrentMonth));					
		}
	});	
	
	$("#datepickerFrom").on("change", function() {									
				
		let fromDate = $(this).datepicker("getDate");
		let toDate = $("#datepickerTo").datepicker("getDate");						
		
		let tOut;
		
		if (fromDate > toDate) {
			let tempDate = toDate;
			$("#datepickerTo").datepicker().datepicker("setDate", $(this).datepicker("getDate"));
			$(this).datepicker().datepicker("setDate", tempDate).blur();	
			
			clearTimeout(window.tOut);
			$("#swapWarning").css("visibility", "visible");
			window.tOut = setTimeout(function(){$("#swapWarning").css("visibility", "hidden")}, 1500);					
		}				
	});
			
	$("#datepickerTo").on("change", function() {									
		
		let fromDate = $("#datepickerFrom").datepicker("getDate");
		let toDate = $(this).datepicker("getDate");
		
		let tOut;
		
		if (toDate  < fromDate) {
			let tempDate = fromDate;
			$("#datepickerFrom").datepicker().datepicker("setDate", $(this).datepicker("getDate"));
			$(this).datepicker().datepicker("setDate", tempDate).blur();

			clearTimeout(window.tOut);
			$("#swapWarning").css("visibility", "visible");
			window.tOut = setTimeout(function(){$("#swapWarning").css("visibility", "hidden")}, 1500);	
		}				
	});	
}
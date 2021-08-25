function getExpensesData () {
	
	let expenses = [];
	
	$("#expenses").ready(function() {				
					
		$("#expenses .expensesRow").each(function(index) {
		
			let newExpense = {};
			
			var expenseLabelFull = $(this).find(".label").text();
			var expenseLabel = expenseLabelFull.substring(0,expenseLabelFull.length-1);
			
			//text of class .value div must be writen in 0,00xx (zł) format for this to work in its current form
			//might be changed later 
			
			let expenseValue = $(this).find(".value").text();
			let matches = expenseValue.match(/\d+\,\d+/);
			
			if (matches && matches.length > 0) {
				newExpense.label = expenseLabel;
				newExpense.value = parseFloat(matches[0].replaceAll(",","."));
				newExpense.row = $(this).get(0);
				expenses.push(newExpense);					
			}				
		});							
		
		//descending
		expenses.sort(function(a, b) {
			return (b.value - a.value);
		});					
	});
	
	return expenses;
}
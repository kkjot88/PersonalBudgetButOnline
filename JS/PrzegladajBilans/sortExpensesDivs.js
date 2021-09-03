function sortExpensesDivs (expenses) {
	
	$("#expenses").ready(function() {	
				
		let expensesDiv = $("#expenses");
		for(let i = expenses.length - 1; i>=0; i--) {
			let self = $(expenses[i].row);
			self.detach();
			expensesDiv.prepend(self);
		}
		
		let title = $("#expenses .columnTitle");
		title.detach();
		expensesDiv.prepend(title);				
	});	
}
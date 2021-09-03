const enterFinancesContent = (finances, financeId) =>{
	
	finances.forEach((finance) => {
		
		if (finance.value > 0) {
			
			let newIncomeRow = document.createElement('div');
			$(newIncomeRow).addClass("row");
			$(financeId).append(newIncomeRow);
			
			let newIncomeLabel = document.createElement('div');
			$(newIncomeLabel).addClass("label").html(`${finance.label}:`);				
			$(newIncomeRow).append(newIncomeLabel);
			
			let newIncomeValue = document.createElement('div');
			$(newIncomeValue).addClass("value").html(`${formatAmount(finance.value)}zł`);
			$(newIncomeRow).append(newIncomeValue);
		}
	});
}
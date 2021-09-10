const enterFinancesContent = (finances, financeId) =>{
	
	finances.forEach((finance) => {
		
		if (finance.value > 0) {
			
			let div1 = document.createElement("div");
				let div2 = document.createElement("div");
				$(div1).text(finance.label+":").addClass("financeLabel");
				$(div2).text(`${formatAmount(finance.value)}zł`).addClass("financeAmount");
			
				$(financeId).append(div1);
				$(financeId).append(div2);
		}
	});
	
	divWidthWrapResize(".financeLabel");
}
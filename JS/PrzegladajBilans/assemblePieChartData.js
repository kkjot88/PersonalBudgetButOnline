function assemblePieChartData (expenses) {
	
	let pieChartData = [];
	let colors = [];
	
	for (let i=0; i<expenses.length; i++) {
	
		let pieChartItem = {};
		
		pieChartItem.label = expenses[i].label;
		pieChartItem.value = expenses[i].value;					

		if (pieChartItem.value > 0) pieChartData.push(pieChartItem);
	}
	
	for (let i=0; i<pieChartData.length; i++) {
		
		let color = getRandomGrayscaleColor(80,180);
		colors.push(color);
	}				
	
	colors.sort(function(a, b) {
		return (a.rgb - b.rgb);
	});
	
	half = Math.ceil(colors.length / 2);				
	
	colorsF = colors.slice(0, half);
	colorsS = colors.slice(half);
	
	colors = [];				
	
	i=0;
	colorsF.forEach( function () {
		colors.push(colorsF[i]);
		if (i < colorsS.length) colors.push(colorsS[i]);
		i++;
	});
	
	for (let i=0; i<pieChartData.length; i++) {
		pieChartData[i].color = colors[i].hex;
	}			
	
	return pieChartData;
}
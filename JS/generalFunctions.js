//const formatAmount = amount => amount.toFixed(2).replace(/(^\d{1,3}|\d{3})(?=(?:\d{3})+(?:$|\.))/g, '$1 ').replace(".",","); - REGEX expresion, for future reference

//		"pl-PL" does no seperate thousands from hundreds if number of thousand is in 1-9 range

const formatAmount = amount => amount.toLocaleString("en-US",{minimumFractionDigits: 2, maximumFractionDigits: 2}).replaceAll(","," ").replace(".",",");

const countTotal = finances => finances.reduce((sum,a) => sum + a.value, 0);

//		function to make width of div align to its content after word wrap

function divWidthWrapResize(divClass) {
	
	let d = document.querySelectorAll(divClass);
			let i, w, width, height;

			for(i = 0; i < d.length; i++) {
				width = d[i].offsetWidth;
				height = d[i].offsetHeight;

				for (w = width; w; w--) {
					d[i].style.width = w + 'px';
					if (d[i].offsetHeight !== height) break;
				}

				if (w < d[i].scrollWidth) {
					d[i].style.width = d[i].style.maxWidth = d[i].scrollWidth + 'px';
				} else {
					d[i].style.width = (w + 1) + 'px';
				}
			}
			
			console.log("??");

}
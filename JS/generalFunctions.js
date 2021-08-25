//const formatAmount = amount => amount.toFixed(2).replace(/(^\d{1,3}|\d{3})(?=(?:\d{3})+(?:$|\.))/g, '$1 ').replace(".",","); - REGEX expresion, for future reference

//		"pl-PL" does no seperate thousands from hundreds if number of thousand is in 1-9 range

const formatAmount = amount => amount.toLocaleString("en-US",{minimumFractionDigits: 2, maximumFractionDigits: 2}).replaceAll(","," ").replace(".",",");

const countTotal = finances => finances.reduce((sum,a) => sum + a.value, 0);
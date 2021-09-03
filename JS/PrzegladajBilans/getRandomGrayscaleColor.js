function getRandomGrayscaleColor(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	var randomNumber = Math.floor(Math.random() * (max - min)) + min;

	var randomGreyScaleColor = {};
	randomGreyScaleColor.hex = "#" + ((1 << 24) + (randomNumber << 16) + (randomNumber << 8) + randomNumber).toString(16).slice(1);
	randomGreyScaleColor.rgb = randomNumber;	
	
	return randomGreyScaleColor;					
}	

//rbg is single value since for color in grayscale r=g=b
//rbg is returned so we can sort array ascending (darkest to brightest)
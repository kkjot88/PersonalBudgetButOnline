function getPieChartOptions(pieChartData) {
	
	let pieChartOptions = {
		header: {
			title: {
		//		text: "Podsumowanie:",
				color: "#c0c0c0",
				fontSize: 28,
				font: "calibri"
			},
			subtitle: {
		//		text: "maybe",
				color: "#c0c0c0",
				fontSize: 16
			},
			titleSubtitlePadding: 24
		},
		//footer: {
		//	text: "Source: me, my room, the last couple of months.",
		//	color: "#c0c0c0",
		//	fontSize: 16,
		//	location: "bottom-center"
		//},
		size: {
			canvasHeight: 600,
			canvasWidth: 820,
			pieOuterRadius: "90%"
		},
		data: {
			smallSegmentGrouping: {
				enabled: false,
				value: 2,
				label: "SmallSegmentGrouping5%",
				color: "#000000"
			},
			content: pieChartData
		},
		labels: {
			outer: {
				pieDistance: 16
			},
			inner: {
				hideWhenLessThanPercentage: 4
			},
			mainLabel: {
				color: "#ffffff",
				fontSize: 16
			},
			percentage: {
				color: "#ffffff",
				fontSize: 16,
				decimalPlaces: 0
			},
			value: {
				color: "#ffffff",
				fontSize: 16
			},
			lines: {
				enabled: true,
				style: "straight",
				color: "#ffffff"
			},
			truncation: {
				enabled: true
			}
		},
		tooltips: {
			enabled: true,
			type: "placeholder",
			string: "{value}zł",
			styles: {
				fadeInSpeed: 500,
				backgroundOpacity: 0.8,
				color: "#ffffff",
				borderRadius: 4,
				fontSize: 16
			}
		},
		effects: {
			load: {
				effect: "none"
			},
			pullOutSegmentOnClick: {
				effect: "linear",
				speed: 400,
				size: 8
			}
		},
		misc: {
			colors: {
				//background: "#1a1c23"
			},
			pieCenterOffset: {
				x: 0,
				y: 0
			}
		},
		callbacks: {}
	};
	
	return pieChartOptions;
}
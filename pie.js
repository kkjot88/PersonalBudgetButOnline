var pie = new d3pie("pieChart", {
					"header": {
						"title": {
							"text": "Podsumowanie",
							"color": "#c0c0c0",
							"fontSize": 28
						},
						"subtitle": {
							"text": "moze?",
							"color": "#c0c0c0",
							"fontSize": 16
						},
						"titleSubtitlePadding": 12
					},
					"footer": {
						"text": "Source: me, my room, the last couple of months.",
						"color": "#c0c0c0",
						"fontSize": 16,
						"location": "bottom-center"
					},
					"size": {
						"canvasHeight": 560,
						"canvasWidth": 560,
						"pieOuterRadius": "100%"
					},
					"data": {
						"smallSegmentGrouping": {
							"enabled": true,
							"value": 5,
							"label": "SmallSegmentGrouping5%",
							"color": "#000000"
						},
						"content": [
							{
								"label": "When's it going to be done?",
								"value": 8,
								"color": "#0d0d0d"
							},
							{
								"label": "Bennnnn!",
								"value": 5,
								"color": "#1c1c1c"
							},
							{
								"label": "Oh, god.",
								"value": 2,
								"color": "#292929"
							},
							{
								"label": "But it's Friday night!",
								"value": 3,
								"color": "#363636"
							},
							{
								"label": "Again?",
								"value": 2,
								"color": "#3e3e3e"
							},
							{
								"label": "I'm considering an affair.",
								"value": 1,
								"color": "#454545"
							},
							{
								"label": "[baleful stare]",
								"value": 3,
								"color": "#4c4c4c"
							}
						]
					},
					"labels": {
						"outer": {
							"pieDistance": 16
						},
						"inner": {
							"hideWhenLessThanPercentage": 15
						},
						"mainLabel": {
							"color": "#ffffff",
							"fontSize": 16
						},
						"percentage": {
							"color": "#ffffff",
							"fontSize": 16,
							"decimalPlaces": 2
						},
						"value": {
							"color": "#ffffff",
							"fontSize": 16
						},
						"lines": {
							"enabled": true,
							"style": "straight",
							"color": "#ffffff"
						},
						"truncation": {
							"enabled": true
						}
					},
					"tooltips": {
						"enabled": true,
						"type": "placeholder",
						"string": "{label}: {value}zł, {percentage}%",
						"styles": {
							"fadeInSpeed": 500,
							"backgroundOpacity": 0.8,
							"color": "#ffffff",
							"borderRadius": 4,
							"fontSize": 16
						}
					},
					"effects": {
						"load": {
							"effect": "none"
						},
						"pullOutSegmentOnClick": {
							"effect": "linear",
							"speed": 400,
							"size": 8
						}
					},
					"misc": {
						"colors": {
							"background": "#1a1c23"
						},
						"pieCenterOffset": {
							"x": 1,
							"y": 1
						}
					},
					"callbacks": {}
				});
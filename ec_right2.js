var ec_right2 = echarts.init(document.getElementById('r2'), "dark");

var ddd = [{'name': '陆巨丰', 'value': '1'}, {'name': '周立欣', 'value': '1'}];
var ec_right2_option = {
//                        backgroundColor: '#515151',
						title : {
						    text : "作者",
						    textStyle : {
						        color : 'white',
						    },
						    left: 'center'
						},
                        tooltip: {
                            show: false
                        },
                        series: [{
                                type: 'wordCloud',
								// drawOutOfBound:true,
                                gridSize: 1,
                                sizeRange: [12, 50],
                                rotationRange: [-45, 0, 45, 90],
                                // maskImage: maskImage,
                                textStyle: {
                                    normal: {
                                        color: function () {
                                            return 'rgb(' +
                                                    Math.round(Math.random() * 255) +
                                                    ', ' + Math.round(Math.random() * 255) +
                                                    ', ' + Math.round(Math.random() * 255) + ')'
                                        }
                                    }
                                },
                                // left: 'center',
                                // top: 'center',
                                // // width: '96%',
                                // // height: '100%',
                                right: null,
                                bottom: null,
                                // width: 300,
                                // height: 200,
                                // top: 20,
                                data:  ddd
                            }]
                    };

ec_right2.setOption(ec_right2_option);

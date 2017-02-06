$(document).ready(function() {

	var tm = TweenMax;

	//========  Architecture Functions  ======
	//===========================================
	
		// Set Initial Animation States
		 
			tm.set('#page-2', {alpha:0, zIndex:-1});
			tm.set('.pie-chart', {alpha:0});

		// CTA Click Functions

		$('#page-1 .cta').on('click', function(){
			tm.fromTo('#page-1', 1, {alpha:1, y:0}, {alpha:0, y:-20, zIndex:-1, ease:Power1.easeOut});
			tm.fromTo('#page-2', 1, {alpha:0, y:20}, {alpha:1, y:0, zIndex:1, ease:Power1.easeInOut, delay:.5});
			tm.fromTo('.pie-chart:eq(1)', 1, {alpha:0, scale:.1}, {alpha:1, scale:1, ease: Back.easeInOut.config(2), delay:1});
			tm.fromTo('.pie-chart:eq(2)', 1, {alpha:0}, {alpha:1, ease: Power1.easeOut, delay:2});
			tm.fromTo('.pie-chart:eq(0)', 1, {alpha:0, scale:.1}, {alpha:1, scale:1, ease: Back.easeInOut.config(1.4), delay:2.1});
			tm.fromTo('.pie-chart:eq(4)', 1, {alpha:0, scale:.9}, {alpha:1, scale:1, ease: Back.easeInOut.config(2), delay:2.6});
			tm.fromTo('.pie-chart:eq(3)', 1, {alpha:0}, {alpha:1, ease: Power1.easeOut, delay:3.25});
		});

		$('#page-2 .cta').on('click', function(){
			tm.fromTo('#page-2', 1, {alpha:1, y:0}, {alpha:0, y:20, zIndex:-1, ease:Power1.easeInOut});
			tm.fromTo('#page-1', 1, {alpha:0}, {alpha:1, zIndex:1, ease:Power1.easeOut, delay:.5});
		});

	//========   Nav Menu Click Functions  ======
	//===========================================
	
		$('.menu-item:eq(0)').on('click', function(){
			$('#scenarios-video').removeClass('fade-in');
			$('#menu').removeClass().addClass('tab1-is-active');
			$('#scenarios-video')[0].pause();
			$('#medicity-network').removeClass('is-next-section is-previous-section').addClass('is-current-section');
			$('#scenarios, #architecture, #solutions').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
		});
		$('.menu-item:eq(1)').on('click', function(){
			$('#menu').removeClass().addClass('tab2-is-active');
			$('#scenarios').removeClass('is-next-section is-previous-section').addClass('is-current-section');
			$('#medicity-network').removeClass('is-current-section').addClass('is-previous-section');
			$('#architecture, #solutions').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
			setTimeout(function(){
				$('#scenarios-video').addClass('fade-in');
			}, 1000);
			setTimeout(function(){
				$('#scenarios-video')[0].play();
				$('#scenarios-video').addClass('fade-in');
			}, 1500);
		});
		$('.menu-item:eq(2)').on('click', function(){
			$('#menu').removeClass().addClass('tab3-is-active');
			$('#scenarios-video')[0].pause();
			$('#architecture').removeClass('is-next-section is-previous-section').addClass('is-current-section');
			$('#medicity-network, #scenarios').removeClass('is-next-section is-current-section').addClass('is-previous-section');
			$('#solutions').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
		});
		$('.menu-item:eq(3)').on('click', function(){
			$('#menu').removeClass().addClass('tab4-is-active');
			$('#solutions').removeClass('is-next-section is-previous-section').addClass('is-current-section');
			$('#scenarios, #architecture, #medicity-network').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
		});

	//========  Map Animation Functions  ======
	//===========================================	

		var lastClicked = 1, 
			stagePositions = 'one-stage-pos two-stage-pos three-stage-pos four-stage-pos five-stage-pos six-stage-pos seven-stage-pos eight-stage-pos no-stage-pos flat-stage-pos',
			auto,
			timer,
			draw,
			longTimer,
			tl = new TimelineMax({paused: true}),
			s1 = $('#stage-1'),
			s2 = $('#stage-2'),
			s3 = $('#stage-3'),
			s4 = $('#stage-4'),
			s5 = $('#stage-5'),
			s6 = $('#stage-6'),
			s7 = $('#stage-7'),
			s8 = $('#stage-8'),
			ns1 = $('.stages-container').not('#stage-1'),
			ns2 = $('.stages-container').not('#stage-2'),
			ns3 = $('.stages-container').not('#stage-3'),
			ns4 = $('.stages-container').not('#stage-4'),
			ns5 = $('.stages-container').not('#stage-5'),
			ns6 = $('.stages-container').not('#stage-6'),
			ns7 = $('.stages-container').not('#stage-7'),
			ns8 = $('.stages-container').not('#stage-8'),
			stages = $('#stage-1, #stage-2, #stage-3, #stage-4, #stage-5, #stage-6, #stage-7, #stage-8'),
			pos1 = 'stages-container absolute-center one-stage-pos',
			pos2 = 'stages-container absolute-center two-stage-pos',
			pos3 = 'stages-container absolute-center three-stage-pos',
			pos4 = 'stages-container absolute-center four-stage-pos',
			pos5 = 'stages-container absolute-center five-stage-pos',
			pos6 = 'stages-container absolute-center six-stage-pos',
			pos7 = 'stages-container absolute-center seven-stage-pos',
			pos8 = 'stages-container absolute-center eight-stage-pos',
			posNull = 'stages-container absolute-center no-stage-pos',
			posFlat = 'stages-container absolute-center flat-stage-pos',
			m1 = $('#one'),
			m2 = $('#two'),
			m3 = $('#three'),
			m4 = $('#four'),
			m5 = $('#five'),
			m6 = $('#six'),
			m7 = $('#seven'),
			m8 = $('#eight'),
			progressBar = $('#progress-bar svg:eq(1)'),
			progressBarContainer = $('#progress-bar'),
			currProgress = $('#current-progress'),
			play = $('#play');

		tm.set('.draw', {drawSVG:"100% 100%"});

	
		// Call Stage Animations

			function positionStages1(){
				tm.set(ns1, {className: posNull});	
				tm.set(s1, {className:pos1});
			}
			
			function startStage1(){
				console.log(lastClicked);
				tm.set(progressBar, {className: 'absolute-center stage1-is-active'});

				s1.find('.stage').removeClass('no-bg').addClass('top-layer');
				ns1.find('.stage').removeClass('top-layer no-bg');
				$('.stage-info:eq(0)').addClass('is-active-info');
				$('.stage-info').not('.stage-info:eq(0)').removeClass('is-active-info');

				switch (lastClicked) {
					case 1:
						console.log('you\'re already at that stage');
						currProgress.removeClass('slow-progress');
						m1.addClass('highlight-circle');
						positionStages1();
						break;
					case 2:
						currProgress.removeClass('slow-progress');
						m2.removeClass('highlight-circle');
						positionStages1();
						setTimeout(function(){
							m1.addClass('highlight-circle');	
						},350);
						break;
					case 3:
						currProgress.removeClass('slow-progress');
						m3.removeClass('highlight-circle');
						positionStages1();
						setTimeout(function(){
							m2.removeClass('highlight-circle');	
						},350);
						setTimeout(function(){
							$(this).addClass('highlight-circle');	
						},700);
						break;
					case 4:
						currProgress.removeClass('slow-progress');
						m4.removeClass('highlight-circle');
						positionStages1();
						setTimeout(function(){
							m3.removeClass('highlight-circle');	
						},350);
						setTimeout(function(){
							m2.removeClass('highlight-circle');	
						},700);
						setTimeout(function(){
							$(this).addClass('highlight-circle');	
						},1050);
						break;
					case 5:
						currProgress.addClass('slow-progress');
						m5.removeClass('highlight-circle');
						positionStages1();
						setTimeout(function(){
							m4.removeClass('highlight-circle');	
						},350);
						setTimeout(function(){
							m3.removeClass('highlight-circle');	
						},700);
						setTimeout(function(){
							m2.removeClass('highlight-circle');	
						},1050);
						setTimeout(function(){
							$(this).addClass('highlight-circle');	
						},1400);
						break;
					case 6:
						currProgress.addClass('slow-progress');
						m6.removeClass('highlight-circle');
						positionStages1();
						setTimeout(function(){
							m5.removeClass('highlight-circle');	
						},350);
						setTimeout(function(){
							m4.removeClass('highlight-circle');	
						},700);
						setTimeout(function(){
							m3.removeClass('highlight-circle');	
						},1050);
						setTimeout(function(){
							m2.removeClass('highlight-circle');	
						},1400);
						setTimeout(function(){
							$(this).addClass('highlight-circle');	
						},1750);
						break;
					case 7:
						currProgress.addClass('slow-progress');
						m7.removeClass('highlight-circle');
						positionStages1();
						setTimeout(function(){
							m6.removeClass('highlight-circle');	
						},350);
						setTimeout(function(){
							m5.removeClass('highlight-circle');	
						},700);
						setTimeout(function(){
							m4.removeClass('highlight-circle');	
						},1050);
						setTimeout(function(){
							m3.removeClass('highlight-circle');	
						},1400);
						setTimeout(function(){
							m2.removeClass('highlight-circle');	
						},1750);
						setTimeout(function(){
							$(this).addClass('highlight-circle');	
						},2100);
						break;
					case 8:
						draw = null;
						currProgress.addClass('slow-progress');
						m8.removeClass('highlight-circle');
						tm.set('.draw', {drawSVG:"100% 100%"});
						setTimeout(function(){
							m7.removeClass('highlight-circle');	
						},350);
						setTimeout(function(){
							m6.removeClass('highlight-circle');	
						},700);
						setTimeout(function(){
							m5.removeClass('highlight-circle');	
						},1050);
						setTimeout(function(){
							m4.removeClass('highlight-circle');	
						},1400);
						setTimeout(function(){
							m3.removeClass('highlight-circle');	
						},1750);
						setTimeout(function(){
							m2.removeClass('highlight-circle');	
						},2100);
						setTimeout(function(){
							$(this).addClass('highlight-circle');	
						},2450);
						tm.set(ns1, {className:'stages-container no-transition no-stage-pos'});
						positionStages1();
						$('.stage:eq(0)').removeClass('no-bg').addClass('top-layer');
						$('.states-outline > path').removeClass('no-stroke-width');
						setTimeout(function(){
							$('.stages-container').removeClass('no-transition');
						}, 1000);
						// tm.set(ns1, {className: posNull, delay:1.1});
				}

				setTimeout(function(){
					lastClicked = 1;
				}, 500);
			}

			var goToStage1 = function(){ startStage1(); };
				
			m1.on('click', function(e){
				if(e.which){
					stopStageAnimation();
					goToStage1();
				} else{
					goToStage1();
				}
			});

			function positionStages2(){
				tm.set(ns1, {className: posNull});
				tm.set(ns2, {className: posNull});
				tm.set(s2, {className:pos1});
				tm.set(s1, {className:pos2});
			}

			function startStage2(){

				tm.set(progressBar, {className: 'absolute-center stage2-is-active'});

				s2.find('.stage').removeClass('no-bg').addClass('top-layer');
				ns2.find('.stage').removeClass('top-layer no-bg');

				$('.stage-info:eq(1)').addClass('is-active-info');
				$('.stage-info').not('.stage-info:eq(1)').removeClass('is-active-info');

				if(lastClicked >= 2){
					switch (lastClicked) {
						case 2:
							currProgress.removeClass('slow-progress');
							console.log('you\'re already at that stage');
							positionStages2();
							break;
						case 3:
							currProgress.removeClass('slow-progress');
							m3.removeClass('highlight-circle');	
							positionStages2();
							break;
						case 4:
							currProgress.removeClass('slow-progress');
							m4.removeClass('highlight-circle');
							positionStages2();
							setTimeout(function(){
								m3.removeClass('highlight-circle');	
							},350);
							setTimeout(function(){
								$(this).addClass('highlight-circle');	
							},700);
							break;
						case 5:
							currProgress.removeClass('slow-progress');
							m5.removeClass('highlight-circle');
							positionStages2();
							setTimeout(function(){
								m4.removeClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m3.removeClass('highlight-circle');	
							},700);
							setTimeout(function(){
								$(this).addClass('highlight-circle');	
							},1050);
							break;
						case 6:
							currProgress.addClass('slow-progress');
							m6.removeClass('highlight-circle');
							positionStages2();
							setTimeout(function(){
								m5.removeClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m4.removeClass('highlight-circle');	
							},700);
							setTimeout(function(){
								m3.removeClass('highlight-circle');	
							},1050);
							setTimeout(function(){
								$(this).addClass('highlight-circle');	
							},1400);
							break;
						case 7:
							currProgress.addClass('slow-progress');
							m7.removeClass('highlight-circle');
							positionStages2();
							setTimeout(function(){
								m6.removeClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m5.removeClass('highlight-circle');	
							},700);
							setTimeout(function(){
								m4.removeClass('highlight-circle');	
							},1050);
							setTimeout(function(){
								m3.removeClass('highlight-circle');	
							},1400);
							setTimeout(function(){
								$(this).addClass('highlight-circle');	
							},1750);
							break;
						case 8:
							draw = null;
							currProgress.addClass('slow-progress');
							m8.removeClass('highlight-circle');
							TweenMax.set('.draw', {drawSVG:"100% 100%"});
							setTimeout(function(){
								m7.removeClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m6.removeClass('highlight-circle');	
							},700);
							setTimeout(function(){
								m5.removeClass('highlight-circle');	
							},1050);
							setTimeout(function(){
								m4.removeClass('highlight-circle');	
							},1400);
							setTimeout(function(){
								m3.removeClass('highlight-circle');	
							},1750);
							setTimeout(function(){
								$(this).addClass('highlight-circle');	
							},2100);
							stages.removeClass(stagePositions).addClass('four-stage-pos');
							$('.states-outline > path').removeClass('no-stroke-width');
							setTimeout(function(){
								positionStages2();
								$('.stages-container').removeClass('no-transition');
							}, 1000);
					}
				} else{
					currProgress.removeClass('slow-progress');
					m1.addClass('highlight-circle');
					positionStages2();
					setTimeout(function(){
						m2.addClass('highlight-circle');	
					},350);
				}

				setTimeout(function(){
					lastClicked = 2;
				}, 500);
			}

			var goToStage2 = function(){ startStage2(); };

			m2.on('click', function(e){
				if(e.which){
					stopStageAnimation();
					goToStage2();
				} else{
					goToStage2();
				}
			});


			function positionStages3(){
				tm.set(s3, {className:pos1});
				tm.set(s2, {className:pos2});
				tm.set(s1, {className:pos3});
			}

			function startStage3(){

				tm.set(progressBar, {className: 'absolute-center stage3-is-active'});
				tm.set(ns1, {className: posNull});
				tm.set(ns2, {className: posNull});
				tm.set(ns3, {className: posNull});

				s3.find('.stage').removeClass('no-bg').addClass('top-layer');
				ns3.find('.stage').removeClass('top-layer no-bg');

				$('.stage-info:eq(2)').addClass('is-active-info');
				$('.stage-info').not('.stage-info:eq(2)').removeClass('is-active-info');

				if(lastClicked >= 3){
					switch (lastClicked) {
						case 3:
							currProgress.removeClass('slow-progress');
							console.log('you\'re already at that stage');
							positionStages3();
							break;
						case 4:
							currProgress.removeClass('slow-progress');
							m4.removeClass('highlight-circle');	
							positionStages3();
							break;
						case 5:
							currProgress.removeClass('slow-progress');
							m5.removeClass('highlight-circle');
							positionStages3();
							setTimeout(function(){
								m4.removeClass('highlight-circle');	
							},350);
							setTimeout(function(){
								$(this).addClass('highlight-circle');	
							},700);
							break;
						case 6:
							currProgress.removeClass('slow-progress');
							m6.removeClass('highlight-circle');
							positionStages3();
							setTimeout(function(){
								m5.removeClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m4.removeClass('highlight-circle');	
							},700);
							setTimeout(function(){
								$(this).addClass('highlight-circle');	
							},1050);
							break;
						case 7:
							currProgress.addClass('slow-progress');
							m7.removeClass('highlight-circle');
							positionStages3();
							setTimeout(function(){
								m6.removeClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m5.removeClass('highlight-circle');	
							},700);
							setTimeout(function(){
								m4.removeClass('highlight-circle');	
							},1050);
							setTimeout(function(){
								$(this).addClass('highlight-circle');	
							},1400);
							break;
						case 8:
							draw = null;
							currProgress.addClass('slow-progress');
							m8.removeClass('highlight-circle');
							TweenMax.set('.draw', {drawSVG:"100% 100%"});
							setTimeout(function(){
								m7.removeClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m6.removeClass('highlight-circle');	
							},700);
							setTimeout(function(){
								m5.removeClass('highlight-circle');	
							},1050);
							setTimeout(function(){
								m4.removeClass('highlight-circle');	
							},1400);
							setTimeout(function(){
								$(this).addClass('highlight-circle');	
							},1750);
							$('.stages-container').not('#stage-8, #stage-7, #stage-6, #stage-5, #stage-4').removeClass(stagePositions).addClass('four-stage-pos');
							$('.states-outline > path').removeClass('no-stroke-width');
							setTimeout(function(){
								positionStages3();
								$('.stages-container').removeClass('no-transition');
							}, 1000);
					}
				} else if(lastClicked < 3){
					switch (lastClicked) {
						case 1:
							currProgress.removeClass('slow-progress');
							m1.addClass('highlight-circle');
							positionStages3();
							setTimeout(function(){
								m2.addClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m3.addClass('highlight-circle');	
							},700);
							break;
						case 2:
							currProgress.removeClass('slow-progress');
							m2.addClass('highlight-circle');
							positionStages3();
							setTimeout(function(){
								m3.addClass('highlight-circle');	
							},350);
					}
				}

				setTimeout(function(){
					lastClicked = 3;
				}, 500);
			}

			var goToStage3 = function(){ startStage3(); };

			m3.on('click', function(e){
				if(e.which){
					stopStageAnimation();
					goToStage3();
				} else{
					goToStage3();
				}
			});


			function positionStages4(){
				tm.set(s4, {className:pos1});
				tm.set(s3, {className:pos2});
				tm.set(s2, {className:pos3});
				tm.set(s1, {className:pos4});
			}

			function startStage4(){
				tm.set(progressBar, {className: 'absolute-center stage4-is-active'});
				tm.set(ns1, {className: posNull});
				tm.set(ns2, {className: posNull});
				tm.set(ns3, {className: posNull});
				tm.set(ns4, {className: posNull});

				s4.find('.stage').removeClass('no-bg').addClass('top-layer');
				ns4.find('.stage').removeClass('top-layer no-bg');

				$('.stage-info:eq(3)').addClass('is-active-info');
				$('.stage-info').not('.stage-info:eq(3)').removeClass('is-active-info');

				if(lastClicked >= 4){
					switch (lastClicked) {
						case 4:
							currProgress.removeClass('slow-progress');
							console.log('you\'re already at that stage');
							positionStages4();
							break;
						case 5:
							currProgress.removeClass('slow-progress');
							m5.removeClass('highlight-circle');
							positionStages4();	
							break;
						case 6:
							currProgress.removeClass('slow-progress');
							m6.removeClass('highlight-circle');
							positionStages4();
							setTimeout(function(){
								m5.removeClass('highlight-circle');	
							},350);
							setTimeout(function(){
								$(this).addClass('highlight-circle');	
							},700);
							break;
						case 7:
							currProgress.addClass('slow-progress');
							m7.removeClass('highlight-circle');
							positionStages4();
							setTimeout(function(){
								m6.removeClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m5.removeClass('highlight-circle');	
							},700);
							setTimeout(function(){
								$(this).addClass('highlight-circle');	
							},1050);
							break;
						case 8:
							draw = null;
							currProgress.addClass('slow-progress');
							m8.removeClass('highlight-circle');
							TweenMax.set('.draw', {drawSVG:"100% 100%"});
							setTimeout(function(){
								m7.removeClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m6.removeClass('highlight-circle');	
							},700);
							setTimeout(function(){
								m5.removeClass('highlight-circle');	
							},1050);
							setTimeout(function(){
								$(this).addClass('highlight-circle');	
							},1400);
							$('.stages-container').not('#stage-8, #stage-7, #stage-6, #stage-5').removeClass(stagePositions).addClass('four-stage-pos');
							$('.states-outline > path').removeClass('no-stroke-width');
							setTimeout(function(){
								positionStages4();
								$('.stages-container').removeClass('no-transition');
							}, 1000);
					}
				} else if(lastClicked < 4){
					switch (lastClicked) {
						case 1:
							currProgress.removeClass('slow-progress');
							m1.addClass('highlight-circle');
							positionStages4();
							setTimeout(function(){
								m2.addClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m3.addClass('highlight-circle');	
							},700);
							setTimeout(function(){
								m4.addClass('highlight-circle');	
							},1050);
							break;
						case 2:
							currProgress.removeClass('slow-progress');
							m2.addClass('highlight-circle');
							positionStages4();
							setTimeout(function(){
								m3.addClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m4.addClass('highlight-circle');	
							},700);
							break;
						case 3:
							currProgress.removeClass('slow-progress');
							m3.addClass('highlight-circle');
							positionStages4();
							setTimeout(function(){
								m4.addClass('highlight-circle');	
							},350);
					}
				}

				setTimeout(function(){
					lastClicked = 4;
				}, 500);
			}

			var goToStage4 = function(){ startStage4(); };

			m4.on('click', function(e){
				if(e.which){
					stopStageAnimation();
					goToStage4();
				} else{
					goToStage4();
				}
			});

			function positionStages5(){
				tm.set(s5, {className:pos1});
				tm.set(s4, {className:pos2});
				tm.set(s3, {className:pos3});
				tm.set(s2, {className:pos4});
				tm.set(s1, {className:pos5});
			}

			function startStage5(){
				tm.set(progressBar, {className: 'absolute-center stage5-is-active'});
				tm.set(ns1, {className: posNull});
				tm.set(ns2, {className: posNull});
				tm.set(ns3, {className: posNull});
				tm.set(ns4, {className: posNull});
				tm.set(ns5, {className: posNull});

				s5.find('.stage').removeClass('no-bg').addClass('top-layer');
				ns5.find('.stage').removeClass('top-layer no-bg');

				$('.stage-info:eq(4)').addClass('is-active-info');
				$('.stage-info').not('.stage-info:eq(4)').removeClass('is-active-info');

				if(lastClicked >= 5){
					switch (lastClicked) {
						case 5:
							currProgress.removeClass('slow-progress');
							console.log('you\'re already at that stage');
							positionStages5();
							break;
						case 6:
							currProgress.removeClass('slow-progress');
							m6.removeClass('highlight-circle');
							positionStages5();	
							break;
						case 7:
							currProgress.removeClass('slow-progress');
							m7.removeClass('highlight-circle');
							positionStages5();
							setTimeout(function(){
								m6.removeClass('highlight-circle');	
							},350);
							setTimeout(function(){
								$(this).addClass('highlight-circle');	
							},700);
							break;
						case 8:
							draw = null;
							currProgress.addClass('slow-progress');
							m8.removeClass('highlight-circle');
							TweenMax.set('.draw', {drawSVG:"100% 100%"});
							$('.states-outline > path').removeClass('no-stroke-width');
							setTimeout(function(){
								m7.removeClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m6.removeClass('highlight-circle');	
							},700);
							setTimeout(function(){
								$(this).addClass('highlight-circle');	
							},1050);
							$('.stages-container').not('#stage-8, #stage-7, #stage-6').removeClass(stagePositions).addClass('four-stage-pos');
							setTimeout(function(){
								positionStages5();
								$('.stages-container').removeClass('no-transition');
							}, 1000);
					}
				} else if(lastClicked < 5){
					switch (lastClicked) {
						case 1:
							currProgress.addClass('slow-progress');
							m1.addClass('highlight-circle');
							positionStages5();
							setTimeout(function(){
								m2.addClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m3.addClass('highlight-circle');	
							},700);
							setTimeout(function(){
								m4.addClass('highlight-circle');	
							},1050);
							setTimeout(function(){
								m5.addClass('highlight-circle');	
							},1400);
							break;
						case 2:
							currProgress.addClass('slow-progress');
							m2.addClass('highlight-circle');
							positionStages5();
							setTimeout(function(){
								m3.addClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m4.addClass('highlight-circle');	
							},700);
							setTimeout(function(){
								m5.addClass('highlight-circle');	
							},1050);
							break;
						case 3:
							currProgress.removeClass('slow-progress');
							m3.addClass('highlight-circle');
							positionStages5();
							setTimeout(function(){
								m4.addClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m5.addClass('highlight-circle');	
							},700);
							break;
							case 4:
							currProgress.removeClass('slow-progress');
							m4.addClass('highlight-circle');
							positionStages5();
							setTimeout(function(){
								m5.addClass('highlight-circle');	
							},350);
					}
				}

				setTimeout(function(){
					lastClicked = 5;
				}, 500);
			}

			var goToStage5 = function(){ startStage5(); };

			m5.on('click', function(e){
				if(e.which){
					stopStageAnimation();
					goToStage5();
				} else{
					goToStage5();
				}
			});

			function positionStages6(){
				tm.set(s6, {className:pos1});
				tm.set(s5, {className:pos2});
				tm.set(s4, {className:pos3});
				tm.set(s3, {className:pos4});
				tm.set(s2, {className:pos5});
				tm.set(s1, {className:pos6});
			}

			function startStage6(){
				tm.set(progressBar, {className: 'absolute-center stage6-is-active'});
				tm.set(ns1, {className: posNull});
				tm.set(ns2, {className: posNull});
				tm.set(ns3, {className: posNull});
				tm.set(ns4, {className: posNull});
				tm.set(ns5, {className: posNull});
				tm.set(ns6, {className: posNull});

				s6.find('.stage').removeClass('no-bg').addClass('top-layer');
				ns6.find('.stage').removeClass('top-layer no-bg');

				$('.stage-info:eq(5)').addClass('is-active-info');
				$('.stage-info').not('.stage-info:eq(5)').removeClass('is-active-info');

				if(lastClicked >= 6){
					switch (lastClicked) {
						case 6:
							currProgress.removeClass('slow-progress');
							console.log('you\'re already at that stage');
							positionStages6();
							break;
						case 7:
							currProgress.removeClass('slow-progress');
							m7.removeClass('highlight-circle');
							positionStages6();	
							break;
						case 8:
							draw = null;
							currProgress.removeClass('slow-progress');
							m8.removeClass('highlight-circle');
							TweenMax.set('.draw', {drawSVG:"100% 100%"});
							setTimeout(function(){
								m7.removeClass('highlight-circle');	
							},350);
							setTimeout(function(){
								$(this).addClass('highlight-circle');	
							},700);
							$('.stages-container').not('#stage-8, #stage-7').removeClass(stagePositions).addClass('four-stage-pos');
							$('.states-outline > path').removeClass('no-stroke-width');
							setTimeout(function(){
								positionStages6();
							}, 1000);
					}
				} else if(lastClicked < 6){
					switch (lastClicked) {
						case 1:
							currProgress.addClass('slow-progress');
							m1.addClass('highlight-circle');
							positionStages6();
							setTimeout(function(){
								m2.addClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m3.addClass('highlight-circle');	
							},700);
							setTimeout(function(){
								m4.addClass('highlight-circle');	
							},1050);
							setTimeout(function(){
								m5.addClass('highlight-circle');	
							},1400);
							setTimeout(function(){
								m6.addClass('highlight-circle');	
							},1750);
							break;
						case 2:
							currProgress.addClass('slow-progress');
							m2.addClass('highlight-circle');
							positionStages6();
							setTimeout(function(){
								m3.addClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m4.addClass('highlight-circle');	
							},700);
							setTimeout(function(){
								m5.addClass('highlight-circle');	
							},1050);
							setTimeout(function(){
								m6.addClass('highlight-circle');	
							},1400);
							break;
						case 3:
							currProgress.removeClass('slow-progress');
							m3.addClass('highlight-circle');
							positionStages6();
							setTimeout(function(){
								m4.addClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m5.addClass('highlight-circle');	
							},700);
							setTimeout(function(){
								m6.addClass('highlight-circle');	
							},1050);
							break;
						case 4:
							currProgress.removeClass('slow-progress');
							m4.addClass('highlight-circle');
							positionStages6();
							setTimeout(function(){
								m5.addClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m6.addClass('highlight-circle');	
							},700);
							break;
						case 5:
							currProgress.removeClass('slow-progress');
							m5.addClass('highlight-circle');
							positionStages6();
							setTimeout(function(){
								m6.addClass('highlight-circle');	
							},350);
					}
				}

				setTimeout(function(){
					lastClicked = 6;
				}, 500);
			}

			var goToStage6 = function(){ startStage6(); };

			m6.on('click', function(e){
				if(e.which){
					stopStageAnimation();
					goToStage6();
				} else{
					goToStage6();
				}
			});

			function positionStages7(){
				tm.set(s7, {className:pos1});
				tm.set(s6, {className:pos2});
				tm.set(s5, {className:pos3});
				tm.set(s4, {className:pos4});
				tm.set(s3, {className:pos5});
				tm.set(s2, {className:pos6});
				tm.set(s1, {className:pos7});
			}

			function startStage7(){
				tm.set(progressBar, {className: 'absolute-center stage7-is-active'});
				tm.set(ns1, {className: posNull});
				tm.set(ns2, {className: posNull});
				tm.set(ns3, {className: posNull});
				tm.set(ns4, {className: posNull});
				tm.set(ns5, {className: posNull});
				tm.set(ns6, {className: posNull});
				tm.set(ns7, {className: posNull});

				s7.find('.stage').removeClass('no-bg').addClass('top-layer');
				ns7.find('.stage').removeClass('top-layer no-bg');

				$('.stage-info:eq(6)').addClass('is-active-info');
				$('.stage-info').not('.stage-info:eq(6)').removeClass('is-active-info');

				if(lastClicked >= 7){
					switch (lastClicked) {
						case 7:
							console.log('you\'re already at that stage');
							break;
						case 8:
							draw = null;
							currProgress.removeClass('slow-progress');
							tm.set('.draw', {drawSVG:"100% 100%"});
							m8.removeClass('highlight-circle');
							ns8.removeClass(stagePositions).addClass('four-stage-pos');
							$('.states-outline > path').removeClass('no-stroke-width');
							setTimeout(function(){
								positionStages7();
								$('.stages-container').removeClass('no-transition');
							}, 1000);
					}
				} else if(lastClicked < 7){
					switch (lastClicked) {
						case 1:
							positionStages7();
							currProgress.addClass('slow-progress');
							m1.addClass('highlight-circle');
							setTimeout(function(){
								m2.addClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m3.addClass('highlight-circle');	
							},700);
							setTimeout(function(){
								m4.addClass('highlight-circle');	
							},1050);
							setTimeout(function(){
								m5.addClass('highlight-circle');	
							},1400);
							setTimeout(function(){
								m6.addClass('highlight-circle');	
							},1750);
							setTimeout(function(){
								m7.addClass('highlight-circle');	
							},2100);
							break;
						case 2:
							positionStages7();
							currProgress.addClass('slow-progress');
							m2.addClass('highlight-circle');
							setTimeout(function(){
								m3.addClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m4.addClass('highlight-circle');	
							},700);
							setTimeout(function(){
								m5.addClass('highlight-circle');	
							},1050);
							setTimeout(function(){
								m6.addClass('highlight-circle');	
							},1400);
							setTimeout(function(){
								m7.addClass('highlight-circle');	
							},1750);
							break;
						case 3:
							positionStages7();
							currProgress.addClass('slow-progress');
							m3.addClass('highlight-circle');
							setTimeout(function(){
								m4.addClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m5.addClass('highlight-circle');	
							},700);
							setTimeout(function(){
								m6.addClass('highlight-circle');	
							},1050);
							setTimeout(function(){
								m7.addClass('highlight-circle');	
							},1400);
							break;
						case 4:
							positionStages7();
							currProgress.addClass('slow-progress');
							m4.addClass('highlight-circle');
							setTimeout(function(){
								m5.addClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m6.addClass('highlight-circle');	
							},700);
							setTimeout(function(){
								m7.addClass('highlight-circle');	
							},1050);
							break;
						case 5:
							positionStages7();
							currProgress.removeClass('slow-progress');
							m5.addClass('highlight-circle');
							setTimeout(function(){
								m6.addClass('highlight-circle');	
							},350);
							setTimeout(function(){
								m7.addClass('highlight-circle');	
							},700);
							break;
						case 6:
							positionStages7();
							currProgress.removeClass('slow-progress');
							m5.addClass('highlight-circle');
							setTimeout(function(){
								m7.addClass('highlight-circle');	
							},350);
					}
				}

				setTimeout(function(){
					lastClicked = 7;
				}, 500);
			}

			var goToStage7 = function(){ startStage7(); };

			m7.on('click', function(e){
				if(e.which){
					stopStageAnimation();
					goToStage7();
				} else{
					goToStage7();
				}
			});
			
			function positionStages8(){
				tm.set(s8, {className:pos1});
				tm.set(s7, {className:pos2});
				tm.set(s6, {className:pos3});
				tm.set(s5, {className:pos4});
				tm.set(s4, {className:pos5});
				tm.set(s3, {className:pos6});
				tm.set(s2, {className:pos7});
				tm.set(s1, {className:pos8});
			}

			function startStage8(){
				tm.set(progressBar, {className: 'absolute-center stage8-is-active'});
				tm.set('.draw', {drawSVG:"100% 100%", onComplete:changeMapPerspective});

				s8.find('.stage').removeClass('no-bg').addClass('top-layer');
				ns8.find('.stage').removeClass('top-layer no-bg');

				$('.stage-info:eq(7)').addClass('is-active-info');
				$('.stage-info').not('.stage-info:eq(7)').removeClass('is-active-info');

				switch (lastClicked) {
					case 8:
						currProgress.removeClass('slow-progress');
						console.log('you\'re already at that stage');
						break;
					case 7:
						currProgress.removeClass('slow-progress');
						positionStages8();
						m7.addClass('highlight-circle');
						setTimeout(function(){
							m8.addClass('highlight-circle');
						},350);
						break;
					case 6:
						currProgress.removeClass('slow-progress');
						positionStages8();
						m6.addClass('highlight-circle');
						setTimeout(function(){
							m7.addClass('highlight-circle');	
						},350);
						setTimeout(function(){
							m8.addClass('highlight-circle');	
						},700);
						break;
					case 5:
						currProgress.removeClass('slow-progress');
						positionStages8();
						m5.addClass('highlight-circle');
						setTimeout(function(){
							m6.addClass('highlight-circle');
						},350);
						setTimeout(function(){
							m7.addClass('highlight-circle');
						},700);
						setTimeout(function(){
							m8.addClass('highlight-circle');
						},1050);
						break;
					case 4:
						currProgress.removeClass('slow-progress');
						positionStages8();
						m4.addClass('highlight-circle');
						setTimeout(function(){
							m5.addClass('highlight-circle');	
						},350);
						setTimeout(function(){
							m6.addClass('highlight-circle');	
						},700);
						setTimeout(function(){
							m7.addClass('highlight-circle');	
						},1050);
						setTimeout(function(){
							m8.addClass('highlight-circle');	
						},1400);
						break;
					case 3:
						currProgress.addClass('slow-progress');
						positionStages8();
						m3.addClass('highlight-circle');
						setTimeout(function(){
							m4.addClass('highlight-circle');	
						},350);
						setTimeout(function(){
							m5.addClass('highlight-circle');	
						},700);
						setTimeout(function(){
							m6.addClass('highlight-circle');	
						},1050);
						setTimeout(function(){
							m7.addClass('highlight-circle');	
						},1400);
						setTimeout(function(){
							m8.addClass('highlight-circle');	
						},1750);
						break;
					case 2:
						currProgress.addClass('slow-progress');
						positionStages8();
						m2.addClass('highlight-circle');
						setTimeout(function(){
							m3.addClass('highlight-circle');	
						},350);
						setTimeout(function(){
							m4.addClass('highlight-circle');	
						},700);
						setTimeout(function(){
							m5.addClass('highlight-circle');	
						},1050);
						setTimeout(function(){
							m6.addClass('highlight-circle');	
						},1400);
						setTimeout(function(){
							m7.addClass('highlight-circle');	
						},1750);
						setTimeout(function(){
							m8.addClass('highlight-circle');	
						},2100);
						break;
					case 1:
						currProgress.addClass('slow-progress');
						positionStages8();
						m1.addClass('highlight-circle');
						setTimeout(function(){
							m2.addClass('highlight-circle');	
						},350);
						setTimeout(function(){
							m3.addClass('highlight-circle');	
						},700);
						setTimeout(function(){
							m4.addClass('highlight-circle');	
						},1050);
						setTimeout(function(){
							m5.addClass('highlight-circle');	
						},1400);
						setTimeout(function(){
							m6.addClass('highlight-circle');	
						},1750);
						setTimeout(function(){
							m7.addClass('highlight-circle');	
						},2100);
						setTimeout(function(){
							m8.addClass('highlight-circle');	
						},2450);
				}

				function changeMapPerspective(){
					draw = setTimeout(function(){
						$('#stage-3, #stage-5, #stage-4').removeClass(stagePositions).addClass('four-stage-pos');
						setTimeout(function(){
							$('#stage-2, #stage-6').removeClass(stagePositions).addClass('four-stage-pos');
						}, 100);
						setTimeout(function(){
							$('#stage-7, #stage-8, #stage-1').removeClass(stagePositions).addClass('four-stage-pos');
						}, 200);
						setTimeout(function(){
							$('.stage').removeClass('top-layer').addClass('no-bg');
						},500);
						setTimeout(function(){
							$('#stage-1, #stage-2, #stage-3, #stage-4, #stage-5, #stage-6, #stage-7, #stage-8').removeClass(stagePositions).addClass('no-transition flat-stage-pos');
							$('.states-outline > path').addClass('no-stroke-width');
						}, 1000);

						setTimeout(function(){
							TweenMax.staggerFromTo('.draw', 1.5, {drawSVG:"100% 100%", ease: Circ.easeOut}, {drawSVG:"0% 100%", ease: Circ.easeOut}, .45);
						}, 2000);
					},1600);	
				}
				
				setTimeout(function(){
					lastClicked = 8;
				}, 500);
			}

			var goToStage8 = function(){ startStage8(); };

			m8.on('click', function(e){
				if(e.which){
					stopStageAnimation();
					goToStage8();
				} else{
					goToStage8();
				}
			});


		// Auto Play Functions

			function startTimer() {
				timer = setTimeout(function(){
					console.log('timing');
					if(play.hasClass('is-playing')){
						play.trigger('click');
						console.log('play triggered');
					};
				}, 2500);
			}

			function startLongTimer() {
				timer = setTimeout(function(){
					console.log('timing');
					if(play.hasClass('is-playing')){
						play.trigger('click');
						console.log('play triggered');
					};
				}, 15000);
			}
	
			function clearTimer() {
				clearTimeout(timer);
				timer = null;
			}

			function startStageAnimation() {
				console.log('starting autoplay');

				play.addClass('is-playing');
				clearTimer();

				if(progressBar.hasClass('stage1-is-active')){
					console.log('autoplay is on stage 1');

					if(play.hasClass('is-playing')){
						window.requestAnimationFrame(goToStage2);
					};
					startTimer();
				}
				else if(progressBar.hasClass('stage2-is-active')){
					console.log('autoplay is on stage 2');

					if(play.hasClass('is-playing')){
						window.requestAnimationFrame(goToStage3);
					};
					startTimer();
				}
				else if(progressBar.hasClass('stage3-is-active')){
					console.log('autoplay is on stage 3');

					if(play.hasClass('is-playing')){
						window.requestAnimationFrame(goToStage4);
					};
					startTimer();
				}
				else if(progressBar.hasClass('stage4-is-active')){
					console.log('autoplay is on stage 4');

					if(play.hasClass('is-playing')){
						window.requestAnimationFrame(goToStage5);
					};
					startTimer();
				}
				else if(progressBar.hasClass('stage5-is-active')){
					console.log('autoplay is on stage 5');

					if(play.hasClass('is-playing')){
						window.requestAnimationFrame(goToStage6);
					};
					startTimer();
				}
				else if(progressBar.hasClass('stage6-is-active')){
					console.log('autoplay is on stage 6');

					if(play.hasClass('is-playing')){
						window.requestAnimationFrame(goToStage7);
					};
					startTimer();
				}
				else if(progressBar.hasClass('stage7-is-active')){
					console.log('autoplay is on stage 7');

					if(play.hasClass('is-playing')){
						goToStage8();
					};
					startLongTimer();
				}
				else if(progressBar.hasClass('stage8-is-active')){
					console.log('autoplay is on stage 8');

					if(play.hasClass('is-playing')){
						window.requestAnimationFrame(goToStage1);
					};
					startTimer();
					
				}
				else{
					console.log('An error occurred');
				}
			}

			function stopStageAnimation() {
				play.removeClass('is-playing');
				clearTimer();
				auto = false;
			}

			play.on('click', function(e){
				if( $(this).hasClass('is-playing') && e.which ){
					play.removeClass('is-playing');
					progressBar.removeClass('is-disabled');
					progressBarContainer.removeClass('steps-are-disabled');
					stopStageAnimation();
					console.log(' autoplay stopped');
					auto = true;
				}
				else if((!$(this).hasClass('is-playing') && e.which)){
					clearTimeout(timer);
					timer=null;
					progressBar.addClass('is-disabled');
					$('#progress-bar').addClass('steps-are-disabled');
					startStageAnimation();
					console.log('playing');
					auto = false;
				}
				else{
					clearTimer();
					startStageAnimation();	
					console.log('auto playing');
				}
			});
});
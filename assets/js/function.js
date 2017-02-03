$(document).ready(function() {
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

	var lastClicked = 1, 
	stagePositions = 'one-stage-pos two-stage-pos three-stage-pos four-stage-pos five-stage-pos six-stage-pos seven-stage-pos eight-stage-pos no-stage-pos flat-stage-pos';

	TweenMax.set('.draw', {drawSVG:"100% 100%"});

	var auto;
	var timer;

	function startStageAnimation() {
		$('#play').addClass('is-playing');
		timer=null;

		if($('#progress-bar svg:eq(1)').hasClass('stage1-is-active')){
			if($('#play').hasClass('is-playing')){
				$('#two').trigger('click');
			};
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#three').trigger('click');
				};
			}, 2500);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#four').trigger('click');
				};
			}, 5000);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#five').trigger('click');
				};
			}, 7500);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#six').trigger('click');
				};
			}, 10000);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#seven').trigger('click');
				};
			}, 12500);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#eight').trigger('click');
				};
			}, 15000);
		}
		else if($('#progress-bar svg:eq(1)').hasClass('stage2-is-active')){
			if($('#play').hasClass('is-playing')){
				$('#three').trigger('click');
			};
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#four').trigger('click');
				};
			}, 2500);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#five').trigger('click');
				};
			}, 5000);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#six').trigger('click');
				};
			}, 7500);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#seven').trigger('click');
				};
			}, 10000);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#eight').trigger('click');
				};
			}, 12500);
		}
		else if($('#progress-bar svg:eq(1)').hasClass('stage3-is-active')){
			if($('#play').hasClass('is-playing')){
				$('#four').trigger('click');
			};
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#five').trigger('click');
				};
			}, 2500);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#six').trigger('click');
				};
			}, 5000);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#seven').trigger('click');
				};
			}, 7500);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#eight').trigger('click');
				};
			}, 10000);
		}
		else if($('#progress-bar svg:eq(1)').hasClass('stage4-is-active')){
			if($('#play').hasClass('is-playing')){
				$('#five').trigger('click');
			};
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#six').trigger('click');
				};
			}, 2500);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#seven').trigger('click');
				};
			}, 5000);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#eight').trigger('click');
				};
			}, 7500);
		}
		else if($('#progress-bar svg:eq(1)').hasClass('stage5-is-active')){
			if($('#play').hasClass('is-playing')){
				$('#six').trigger('click');
			};
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#seven').trigger('click');
				};
			}, 2500);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#eight').trigger('click');
				};
			}, 5000);
		}
		else if($('#progress-bar svg:eq(1)').hasClass('stage6-is-active')){
			if($('#play').hasClass('is-playing')){
				$('#seven').trigger('click');
			};
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#eight').trigger('click');
				};
			}, 2500);
		}
		else if($('#progress-bar svg:eq(1)').hasClass('stage7-is-active')){
			if($('#play').hasClass('is-playing')){
				$('#eight').trigger('click');
			};
		}
		else{
			if($('#play').hasClass('is-playing')){
				$('#one').trigger('click');
			};
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#two').trigger('click');
				};
			}, 2500);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#three').trigger('click');
				};
			}, 5000);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#four').trigger('click');
				};
			}, 7500);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#five').trigger('click');
				};
			}, 10000);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#six').trigger('click');
				};
			}, 12500);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#seven').trigger('click');
				};
			}, 15000);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#eight').trigger('click');
					// auto = true;
				};
			}, 17500);
			timer = setTimeout(function(){
				if($('#play').hasClass('is-playing')){
					$('#play').trigger('click');
				};
			}, 28000);
		}
	}

	function stopStageAnimation() {
		$('#play').removeClass('is-playing');
	}

	$('#play').on('click', function(e){
		if((!$(this).hasClass('is-playing') && e.which)){
			$('#progress-bar svg:eq(1)').addClass('is-disabled');
			$('#progress-bar').addClass('steps-are-disabled');
			startStageAnimation();
			console.log('playing');
			auto = false;
		} else if(auto == true){
			startStageAnimation();
			console.log('playing');
		} else {
			$('#play').removeClass('is-playing');
			$('#progress-bar svg:eq(1)').removeClass('is-disabled');
			$('#progress-bar').removeClass('steps-are-disabled');
			clearTimeout(timer);
			timer=null;
			console.log('stopped');
			auto = false;
			var currentStage = $('#progress-bar svg:eq(1) .highlight-circle:last-child');

			currentStage.trigger('click');
		}
	});

	function positionStages1(){
		$('#stage-1').removeClass(stagePositions).addClass('one-stage-pos');
	}
	$('#one').on('click', function(e){
		if(e.which){
			$('#play').removeClass('is-playing');
			clearTimeout(timer);
			timer=null;
			console.log('stopped');
			auto = false;
			setTimeout(function(){
				startStage1();
			}, 2000);	
		} else{
			startStage1();
		}
		function startStage1(){
			$('#progress-bar svg:eq(1)').removeClass().addClass('absolute-center stage1-is-active');
			$('.stages-container').not('#stage-1').removeClass(stagePositions).addClass('no-stage-pos');
			$('.stage:eq(0)').removeClass('no-bg').addClass('top-layer');
			$('.stage').not('.stage:eq(0)').removeClass('top-layer no-bg');
			$('.stage-info:eq(0)').addClass('is-active-info');
			$('.stage-info').not('.stage-info:eq(0)').removeClass('is-active-info');

			switch (lastClicked) {
				case 1:
				$('#current-progress').removeClass('slow-progress');
				console.log('you\'re already at that stage');
				$('#one').addClass('highlight-circle');	
				positionStages1();
				break;
				case 2:
				$('#current-progress').removeClass('slow-progress');
				$('#two').removeClass('highlight-circle');
				positionStages1();
				setTimeout(function(){
					$('#one').addClass('highlight-circle');	
				},350);
				break;
				case 3:
				$('#current-progress').removeClass('slow-progress');
				$('#three').removeClass('highlight-circle');
				positionStages1();
				setTimeout(function(){
					$('#two').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$(this).addClass('highlight-circle');	
				},700);
				break;
				case 4:
				$('#current-progress').removeClass('slow-progress');
				$('#four').removeClass('highlight-circle');
				positionStages1();
				setTimeout(function(){
					$('#three').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#two').removeClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$(this).addClass('highlight-circle');	
				},1050);
				break;
				case 5:
				$('#current-progress').addClass('slow-progress');
				$('#five').removeClass('highlight-circle');
				positionStages1();
				setTimeout(function(){
					$('#four').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#three').removeClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#two').removeClass('highlight-circle');	
				},1050);
				setTimeout(function(){
					$(this).addClass('highlight-circle');	
				},1400);
				break;
				case 6:
				$('#current-progress').addClass('slow-progress');
				$('#six').removeClass('highlight-circle');
				positionStages1();
				setTimeout(function(){
					$('#five').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#four').removeClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#three').removeClass('highlight-circle');	
				},1050);
				setTimeout(function(){
					$('#two').removeClass('highlight-circle');	
				},1400);
				setTimeout(function(){
					$(this).addClass('highlight-circle');	
				},1750);
				break;
				case 7:
				$('#current-progress').addClass('slow-progress');
				$('#seven').removeClass('highlight-circle');
				positionStages1();
				setTimeout(function(){
					$('#six').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#five').removeClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#four').removeClass('highlight-circle');	
				},1050);
				setTimeout(function(){
					$('#three').removeClass('highlight-circle');	
				},1400);
				setTimeout(function(){
					$('#two').removeClass('highlight-circle');	
				},1750);
				setTimeout(function(){
					$(this).addClass('highlight-circle');	
				},2100);
				break;
				case 8:
				$('#current-progress').addClass('slow-progress');
				$('#eight').removeClass('highlight-circle');
				TweenMax.set('.draw', {drawSVG:"100% 100%"});
				setTimeout(function(){
					$('#seven').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#six').removeClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#five').removeClass('highlight-circle');	
				},1050);
				setTimeout(function(){
					$('#four').removeClass('highlight-circle');	
				},1400);
				setTimeout(function(){
					$('#three').removeClass('highlight-circle');	
				},1750);
				setTimeout(function(){
					$('#two').removeClass('highlight-circle');	
				},2100);
				setTimeout(function(){
					$(this).addClass('highlight-circle');	
				},2450);
				$('.stages-container').not('#stage-8, #stage-7, #stage-6, #stage-5, #stage-4, #stage-3, #stage-2').removeClass(stagePositions).addClass('four-stage-pos');
				$('.states-outline > path').removeClass('no-stroke-width');
				setTimeout(function(){
					positionStages1();
					$('.stages-container').removeClass('no-transition');
				}, 1000);
			}

			setTimeout(function(){
				lastClicked = 1;
			}, 500);
		}
	});

function positionStages2(){
	$('#stage-2').removeClass(stagePositions).addClass('one-stage-pos');
	$('#stage-1').removeClass(stagePositions).addClass('two-stage-pos');
}
$('#two').on('click', function(e){
	if(e.which){
		$('#play').removeClass('is-playing');
		clearTimeout(timer);
		timer=null;
		console.log('stopped');
		auto = false;
		setTimeout(function(){
			startStage2();
		}, 2000);	
	} else{
		startStage2();
	}
	function startStage2(){
		$('#progress-bar svg:eq(1)').removeClass().addClass('absolute-center stage2-is-active');
		$('.stages-container').not('#stage-1, #stage-2').removeClass(stagePositions).addClass('no-stage-pos');
		$('.stage:eq(1)').removeClass('no-bg').addClass('top-layer');
		$('.stage').not('.stage:eq(1)').removeClass('top-layer no-bg');
		$('.stage-info:eq(1)').addClass('is-active-info');
		$('.stage-info').not('.stage-info:eq(1)').removeClass('is-active-info');

		if(lastClicked >= 2){
			switch (lastClicked) {
				case 2:
				$('#current-progress').removeClass('slow-progress');
				console.log('you\'re already at that stage');
				positionStages2();
				break;
				case 3:
				$('#current-progress').removeClass('slow-progress');
				$('#three').removeClass('highlight-circle');	
				positionStages2();
				break;
				case 4:
				$('#current-progress').removeClass('slow-progress');
				$('#four').removeClass('highlight-circle');
				positionStages2();
				setTimeout(function(){
					$('#three').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$(this).addClass('highlight-circle');	
				},700);
				break;
				case 5:
				$('#current-progress').removeClass('slow-progress');
				$('#five').removeClass('highlight-circle');
				positionStages2();
				setTimeout(function(){
					$('#four').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#three').removeClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$(this).addClass('highlight-circle');	
				},1050);
				break;
				case 6:
				$('#current-progress').addClass('slow-progress');
				$('#six').removeClass('highlight-circle');
				positionStages2();
				setTimeout(function(){
					$('#five').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#four').removeClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#three').removeClass('highlight-circle');	
				},1050);
				setTimeout(function(){
					$(this).addClass('highlight-circle');	
				},1400);
				break;
				case 7:
				$('#current-progress').addClass('slow-progress');
				$('#seven').removeClass('highlight-circle');
				positionStages2();
				setTimeout(function(){
					$('#six').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#five').removeClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#four').removeClass('highlight-circle');	
				},1050);
				setTimeout(function(){
					$('#three').removeClass('highlight-circle');	
				},1400);
				setTimeout(function(){
					$(this).addClass('highlight-circle');	
				},1750);
				break;
				case 8:
				$('#current-progress').addClass('slow-progress');
				$('#eight').removeClass('highlight-circle');
				TweenMax.set('.draw', {drawSVG:"100% 100%"});
				setTimeout(function(){
					$('#seven').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#six').removeClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#five').removeClass('highlight-circle');	
				},1050);
				setTimeout(function(){
					$('#four').removeClass('highlight-circle');	
				},1400);
				setTimeout(function(){
					$('#three').removeClass('highlight-circle');	
				},1750);
				setTimeout(function(){
					$(this).addClass('highlight-circle');	
				},2100);
				$('.stages-container').not('#stage-8, #stage-7, #stage-6, #stage-5, #stage-4, #stage-3').removeClass(stagePositions).addClass('four-stage-pos');
				$('.states-outline > path').removeClass('no-stroke-width');
				setTimeout(function(){
					positionStages2();
					$('.stages-container').removeClass('no-transition');
				}, 1000);
			}
		} else{
			$('#current-progress').removeClass('slow-progress');
			$('#one').addClass('highlight-circle');
			positionStages2();
			setTimeout(function(){
				$('#two').addClass('highlight-circle');	
			},350);
		}

		setTimeout(function(){
			lastClicked = 2;
		}, 500);
	}
});

function positionStages3(){
	$('#stage-3').removeClass(stagePositions).addClass('one-stage-pos');
	$('#stage-2').removeClass(stagePositions).addClass('two-stage-pos');
	$('#stage-1').removeClass(stagePositions).addClass('three-stage-pos');
}
$('#three').on('click', function(e){
	if(e.which){
		$('#play').removeClass('is-playing');
		clearTimeout(timer);
		timer=null;
		console.log('stopped');
		auto = false;
		setTimeout(function(){
			startStage3();
		}, 2000);	
	} else{
		startStage3();
	}
	function startStage3(){
		$('#progress-bar svg:eq(1)').removeClass().addClass('absolute-center stage3-is-active');
		$('.stages-container').not('#stage-1, #stage-2, #stage-3').removeClass(stagePositions).addClass('no-stage-pos');
		$('.stage:eq(2)').removeClass('no-bg').addClass('top-layer');
		$('.stage').not('.stage:eq(2)').removeClass('top-layer no-bg');
		$('.stage-info:eq(2)').addClass('is-active-info');
		$('.stage-info').not('.stage-info:eq(2)').removeClass('is-active-info');

		if(lastClicked >= 3){
			switch (lastClicked) {
				case 3:
				$('#current-progress').removeClass('slow-progress');
				console.log('you\'re already at that stage');
				positionStages3();
				break;
				case 4:
				$('#current-progress').removeClass('slow-progress');
				$('#four').removeClass('highlight-circle');	
				positionStages3();
				break;
				case 5:
				$('#current-progress').removeClass('slow-progress');
				$('#five').removeClass('highlight-circle');
				positionStages3();
				setTimeout(function(){
					$('#four').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$(this).addClass('highlight-circle');	
				},700);
				break;
				case 6:
				$('#current-progress').removeClass('slow-progress');
				$('#six').removeClass('highlight-circle');
				positionStages3();
				setTimeout(function(){
					$('#five').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#four').removeClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$(this).addClass('highlight-circle');	
				},1050);
				break;
				case 7:
				$('#current-progress').addClass('slow-progress');
				$('#seven').removeClass('highlight-circle');
				positionStages3();
				setTimeout(function(){
					$('#six').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#five').removeClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#four').removeClass('highlight-circle');	
				},1050);
				setTimeout(function(){
					$(this).addClass('highlight-circle');	
				},1400);
				break;
				case 8:
				$('#current-progress').addClass('slow-progress');
				$('#eight').removeClass('highlight-circle');
				TweenMax.set('.draw', {drawSVG:"100% 100%"});
				setTimeout(function(){
					$('#seven').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#six').removeClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#five').removeClass('highlight-circle');	
				},1050);
				setTimeout(function(){
					$('#four').removeClass('highlight-circle');	
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
				$('#current-progress').removeClass('slow-progress');
				$('#one').addClass('highlight-circle');
				positionStages3();
				setTimeout(function(){
					$('#two').addClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#three').addClass('highlight-circle');	
				},700);
				break;
				case 2:
				$('#current-progress').removeClass('slow-progress');
				$('#two').addClass('highlight-circle');
				positionStages3();
				setTimeout(function(){
					$('#three').addClass('highlight-circle');	
				},350);
			}
		}

		setTimeout(function(){
			lastClicked = 3;
		}, 500);
	}
});

function positionStages4(){
	$('#stage-4').removeClass(stagePositions).addClass('one-stage-pos');
	$('#stage-3').removeClass(stagePositions).addClass('two-stage-pos');
	$('#stage-2').removeClass(stagePositions).addClass('three-stage-pos');
	$('#stage-1').removeClass(stagePositions).addClass('four-stage-pos');
}
$('#four').on('click', function(e){
	if(e.which){
		$('#play').removeClass('is-playing');
		clearTimeout(timer);
		timer=null;
		console.log('stopped');
		auto = false;
		setTimeout(function(){
			startStage4();
		}, 2000);	
	} else{
		startStage4();
	}
	function startStage4(){
		$('#progress-bar svg:eq(1)').removeClass().addClass('absolute-center stage4-is-active');
		$('.stages-container').not('#stage-1, #stage-2, #stage-3, #stage-4').removeClass(stagePositions).addClass('no-stage-pos');
		$('.stage:eq(3)').removeClass('no-bg').addClass('top-layer');
		$('.stage').not('.stage:eq(3)').removeClass('top-layer no-bg');
		$('.stage-info:eq(3)').addClass('is-active-info');
		$('.stage-info').not('.stage-info:eq(3)').removeClass('is-active-info');

		if(lastClicked >= 4){
			switch (lastClicked) {
				case 4:
				$('#current-progress').removeClass('slow-progress');
				console.log('you\'re already at that stage');
				positionStages4();
				break;
				case 5:
				$('#current-progress').removeClass('slow-progress');
				$('#five').removeClass('highlight-circle');
				positionStages4();	
				break;
				case 6:
				$('#current-progress').removeClass('slow-progress');
				$('#six').removeClass('highlight-circle');
				positionStages4();
				setTimeout(function(){
					$('#five').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$(this).addClass('highlight-circle');	
				},700);
				break;
				case 7:
				$('#current-progress').addClass('slow-progress');
				$('#seven').removeClass('highlight-circle');
				positionStages4();
				setTimeout(function(){
					$('#six').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#five').removeClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$(this).addClass('highlight-circle');	
				},1050);
				break;
				case 8:
				$('#current-progress').addClass('slow-progress');
				$('#eight').removeClass('highlight-circle');
				TweenMax.set('.draw', {drawSVG:"100% 100%"});
				setTimeout(function(){
					$('#seven').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#six').removeClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#five').removeClass('highlight-circle');	
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
				$('#current-progress').removeClass('slow-progress');
				$('#one').addClass('highlight-circle');
				positionStages4();
				setTimeout(function(){
					$('#two').addClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#three').addClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#four').addClass('highlight-circle');	
				},1050);
				break;
				case 2:
				$('#current-progress').removeClass('slow-progress');
				$('#two').addClass('highlight-circle');
				positionStages4();
				setTimeout(function(){
					$('#three').addClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#four').addClass('highlight-circle');	
				},700);
				break;
				case 3:
				$('#current-progress').removeClass('slow-progress');
				$('#three').addClass('highlight-circle');
				positionStages4();
				setTimeout(function(){
					$('#four').addClass('highlight-circle');	
				},350);
			}
		}

		setTimeout(function(){
			lastClicked = 4;
		}, 500);
	}
});

function positionStages5(){
	$('#stage-5').removeClass(stagePositions).addClass('one-stage-pos');
	$('#stage-4').removeClass(stagePositions).addClass('two-stage-pos');
	$('#stage-3').removeClass(stagePositions).addClass('three-stage-pos');
	$('#stage-2').removeClass(stagePositions).addClass('four-stage-pos');
	$('#stage-1').removeClass(stagePositions).addClass('five-stage-pos');
}
$('#five').on('click', function(e){
	if(e.which){
		$('#play').removeClass('is-playing');
		clearTimeout(timer);
		timer=null;
		console.log('stopped');
		auto = false;
		setTimeout(function(){
			startStage5();
		}, 2000);	
	} else{
		startStage5();
	}
	function startStage5(){
		$('#progress-bar svg:eq(1)').removeClass().addClass('absolute-center stage5-is-active');
		$('.stages-container').not('#stage-1, #stage-2, #stage-3, #stage-4, #stage-5').removeClass(stagePositions).addClass('no-stage-pos');
		$('.stage:eq(4)').removeClass('no-bg').addClass('top-layer');
		$('.stage').not('.stage:eq(4)').removeClass('top-layer no-bg');
		$('.stage-info:eq(4)').addClass('is-active-info');
		$('.stage-info').not('.stage-info:eq(4)').removeClass('is-active-info');

		if(lastClicked >= 5){
			switch (lastClicked) {
				case 5:
				$('#current-progress').removeClass('slow-progress');
				console.log('you\'re already at that stage');
				positionStages5();
				break;
				case 6:
				$('#current-progress').removeClass('slow-progress');
				$('#six').removeClass('highlight-circle');
				positionStages5();	
				break;
				case 7:
				$('#current-progress').removeClass('slow-progress');
				$('#seven').removeClass('highlight-circle');
				positionStages5();
				setTimeout(function(){
					$('#six').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$(this).addClass('highlight-circle');	
				},700);
				break;
				case 8:
				$('#current-progress').addClass('slow-progress');
				$('#eight').removeClass('highlight-circle');
				TweenMax.set('.draw', {drawSVG:"100% 100%"});
				$('.states-outline > path').removeClass('no-stroke-width');
				setTimeout(function(){
					$('#seven').removeClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#six').removeClass('highlight-circle');	
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
				$('#current-progress').addClass('slow-progress');
				$('#one').addClass('highlight-circle');
				positionStages5();
				setTimeout(function(){
					$('#two').addClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#three').addClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#four').addClass('highlight-circle');	
				},1050);
				setTimeout(function(){
					$('#five').addClass('highlight-circle');	
				},1400);
				break;
				case 2:
				$('#current-progress').addClass('slow-progress');
				$('#two').addClass('highlight-circle');
				positionStages5();
				setTimeout(function(){
					$('#three').addClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#four').addClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#five').addClass('highlight-circle');	
				},1050);
				break;
				case 3:
				$('#current-progress').removeClass('slow-progress');
				$('#three').addClass('highlight-circle');
				positionStages5();
				setTimeout(function(){
					$('#four').addClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#five').addClass('highlight-circle');	
				},700);
				break;
				case 4:
				$('#current-progress').removeClass('slow-progress');
				$('#four').addClass('highlight-circle');
				positionStages5();
				setTimeout(function(){
					$('#five').addClass('highlight-circle');	
				},350);
			}
		}

		setTimeout(function(){
			lastClicked = 5;
		}, 500);
	}
});
function positionStages6(){
	$('#stage-6').removeClass(stagePositions).addClass('one-stage-pos');
	$('#stage-5').removeClass(stagePositions).addClass('two-stage-pos');
	$('#stage-4').removeClass(stagePositions).addClass('three-stage-pos');
	$('#stage-3').removeClass(stagePositions).addClass('four-stage-pos');
	$('#stage-2').removeClass(stagePositions).addClass('five-stage-pos');
	$('#stage-1').removeClass(stagePositions).addClass('six-stage-pos');
}
$('#six').on('click', function(e){
	if(e.which){
		$('#play').removeClass('is-playing');
		clearTimeout(timer);
		timer=null;
		console.log('stopped');
		auto = false;
		setTimeout(function(){
			startStage6();
		}, 2000);	
	} else{
		startStage6();
	}
	function startStage6(){
		$('#progress-bar svg:eq(1)').removeClass().addClass('absolute-center stage6-is-active');
		$('.stages-container').not('#stage-1, #stage-2, #stage-3, #stage-4, #stage-5, #stage-6').removeClass(stagePositions).addClass('no-stage-pos');
		$('.stage:eq(5)').removeClass('no-bg').addClass('top-layer');
		$('.stage').not('.stage:eq(5)').removeClass('top-layer no-bg');
		$('.stage-info:eq(5)').addClass('is-active-info');
		$('.stage-info').not('.stage-info:eq(5)').removeClass('is-active-info');

		if(lastClicked >= 6){
			switch (lastClicked) {
				case 6:
				$('#current-progress').removeClass('slow-progress');
				console.log('you\'re already at that stage');
				positionStages6();
				break;
				case 7:
				$('#current-progress').removeClass('slow-progress');
				$('#seven').removeClass('highlight-circle');
				positionStages6();	
				break;
				case 8:
				$('#current-progress').removeClass('slow-progress');
				$('#eight').removeClass('highlight-circle');
				TweenMax.set('.draw', {drawSVG:"100% 100%"});
				setTimeout(function(){
					$('#seven').removeClass('highlight-circle');	
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
				$('#current-progress').addClass('slow-progress');
				$('#one').addClass('highlight-circle');
				positionStages6();
				setTimeout(function(){
					$('#two').addClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#three').addClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#four').addClass('highlight-circle');	
				},1050);
				setTimeout(function(){
					$('#five').addClass('highlight-circle');	
				},1400);
				setTimeout(function(){
					$('#six').addClass('highlight-circle');	
				},1750);
				break;
				case 2:
				$('#current-progress').addClass('slow-progress');
				$('#two').addClass('highlight-circle');
				positionStages6();
				setTimeout(function(){
					$('#three').addClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#four').addClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#five').addClass('highlight-circle');	
				},1050);
				setTimeout(function(){
					$('#six').addClass('highlight-circle');	
				},1400);
				break;
				case 3:
				$('#current-progress').removeClass('slow-progress');
				$('#three').addClass('highlight-circle');
				positionStages6();
				setTimeout(function(){
					$('#four').addClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#five').addClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#six').addClass('highlight-circle');	
				},1050);
				break;
				case 4:
				$('#current-progress').removeClass('slow-progress');
				$('#four').addClass('highlight-circle');
				positionStages6();
				setTimeout(function(){
					$('#five').addClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#six').addClass('highlight-circle');	
				},700);
				break;
				case 5:
				$('#current-progress').removeClass('slow-progress');
				$('#five').addClass('highlight-circle');
				positionStages6();
				setTimeout(function(){
					$('#six').addClass('highlight-circle');	
				},350);
			}
		}

		setTimeout(function(){
			lastClicked = 6;
		}, 500);
	}
});
function positionStages7() {
	$('#stage-7').removeClass(stagePositions).addClass('one-stage-pos');
	$('#stage-6').removeClass(stagePositions).addClass('two-stage-pos');
	$('#stage-5').removeClass(stagePositions).addClass('three-stage-pos');
	$('#stage-4').removeClass(stagePositions).addClass('four-stage-pos');
	$('#stage-3').removeClass(stagePositions).addClass('five-stage-pos');
	$('#stage-2').removeClass(stagePositions).addClass('six-stage-pos');
	$('#stage-1').removeClass(stagePositions).addClass('seven-stage-pos');
}
$('#seven').on('click', function(e){
	if(e.which){
		$('#play').removeClass('is-playing');
		clearTimeout(timer);
		timer=null;
		console.log('stopped');
		auto = false;	
		setTimeout(function(){
			startStage7();
		}, 2000);
	} else{
		startStage7();
	}
	function startStage7(){
		$('#progress-bar svg:eq(1)').removeClass().addClass('absolute-center stage7-is-active');
		$('.stages-container').not('#stage-1, #stage-2, #stage-3, #stage-4, #stage-5, #stage-6, #stage-7').removeClass(stagePositions).addClass('no-stage-pos');
		$('.stage:eq(6)').removeClass('no-bg').addClass('top-layer');
		$('.stage').not('.stage:eq(6)').removeClass('top-layer no-bg');
		$('.stage-info:eq(6)').addClass('is-active-info');
		$('.stage-info').not('.stage-info:eq(6)').removeClass('is-active-info');

		if(lastClicked >= 7){
			switch (lastClicked) {
				case 7:
				console.log('you\'re already at that stage');
				break;
				case 8:
				$('#current-progress').removeClass('slow-progress');
				$('#eight').removeClass('highlight-circle');
				TweenMax.set('.draw', {drawSVG:"100% 100%"});
				$('.stages-container').not('#stage-8').removeClass(stagePositions).addClass('four-stage-pos');
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
				$('#current-progress').addClass('slow-progress');
				$('#one').addClass('highlight-circle');
				setTimeout(function(){
					$('#two').addClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#three').addClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#four').addClass('highlight-circle');	
				},1050);
				setTimeout(function(){
					$('#five').addClass('highlight-circle');	
				},1400);
				setTimeout(function(){
					$('#six').addClass('highlight-circle');	
				},1750);
				setTimeout(function(){
					$('#seven').addClass('highlight-circle');	
				},2100);
				break;
				case 2:
				positionStages7();
				$('#current-progress').addClass('slow-progress');
				$('#two').addClass('highlight-circle');
				setTimeout(function(){
					$('#three').addClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#four').addClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#five').addClass('highlight-circle');	
				},1050);
				setTimeout(function(){
					$('#six').addClass('highlight-circle');	
				},1400);
				setTimeout(function(){
					$('#seven').addClass('highlight-circle');	
				},1750);
				break;
				case 3:
				positionStages7();
				$('#current-progress').addClass('slow-progress');
				$('#three').addClass('highlight-circle');
				setTimeout(function(){
					$('#four').addClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#five').addClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#six').addClass('highlight-circle');	
				},1050);
				setTimeout(function(){
					$('#seven').addClass('highlight-circle');	
				},1400);
				break;
				case 4:
				positionStages7();
				$('#current-progress').addClass('slow-progress');
				$('#four').addClass('highlight-circle');
				setTimeout(function(){
					$('#five').addClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#six').addClass('highlight-circle');	
				},700);
				setTimeout(function(){
					$('#seven').addClass('highlight-circle');	
				},1050);
				break;
				case 5:
				positionStages7();
				$('#current-progress').removeClass('slow-progress');
				$('#five').addClass('highlight-circle');
				setTimeout(function(){
					$('#six').addClass('highlight-circle');	
				},350);
				setTimeout(function(){
					$('#seven').addClass('highlight-circle');	
				},700);
				break;
				case 6:
				positionStages7();
				$('#current-progress').removeClass('slow-progress');
				$('#five').addClass('highlight-circle');
				setTimeout(function(){
					$('#seven').addClass('highlight-circle');	
				},350);
			}
		}

		setTimeout(function(){
			lastClicked = 7;
		}, 500);
	}
});
$('#eight').on('click', function(e){
	if(e.which){
		$('#play').removeClass('is-playing');
		clearTimeout(timer);
		timer=null;
		console.log('stopped');
		auto = false;
		setTimeout(function(){
			startStage8();
		}, 2000);	
	} else{
		startStage8();
	}
	function startStage8(){
		$('#progress-bar svg:eq(1)').removeClass().addClass('absolute-center stage8-is-active');
		$('#stage-8').removeClass(stagePositions).addClass('one-stage-pos');
		$('#stage-7').removeClass(stagePositions).addClass('two-stage-pos');
		$('#stage-6').removeClass(stagePositions).addClass('three-stage-pos');
		$('#stage-5').removeClass(stagePositions).addClass('four-stage-pos');
		$('#stage-4').removeClass(stagePositions).addClass('five-stage-pos');
		$('#stage-3').removeClass(stagePositions).addClass('six-stage-pos');
		$('#stage-2').removeClass(stagePositions).addClass('seven-stage-pos');
		$('#stage-1').removeClass(stagePositions).addClass('eight-stage-pos');
		$('.stage:eq(7)').removeClass('no-bg').addClass('top-layer');
		$('.stage').not('.stage:eq(7)').removeClass('top-layer');
		$('.stage-info:eq(7)').addClass('is-active-info');
		$('.stage-info').not('.stage-info:eq(7)').removeClass('is-active-info');
		TweenMax.set('.draw', {drawSVG:"100% 100%"});

		setTimeout(function(){
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
		},1600);

		setTimeout(function(){
			$('#stage-1, #stage-2, #stage-3, #stage-4, #stage-5, #stage-6, #stage-7, #stage-8').removeClass(stagePositions).addClass('no-transition flat-stage-pos');
			$('.states-outline > path').addClass('no-stroke-width');
		}, 2600);

		setTimeout(function(){
			TweenMax.staggerFromTo('.draw', 1.5, {drawSVG:"100% 100%", ease: Circ.easeOut}, {drawSVG:"0% 100%", ease: Circ.easeOut}, .45);
		}, 3600);
	}
// clearTimeout(drawConnection);

switch (lastClicked) {
	case 8:
	$('#current-progress').removeClass('slow-progress');
	console.log('you\'re already at that stage');
	break;
	case 7:
	$('#current-progress').removeClass('slow-progress');
	$('#seven').addClass('highlight-circle');
	setTimeout(function(){
		$('#eight').addClass('highlight-circle');
	},350);
	break;
	case 6:
	$('#current-progress').removeClass('slow-progress');
	$('#six').addClass('highlight-circle');
	setTimeout(function(){
		$('#seven').addClass('highlight-circle');	
	},350);
	setTimeout(function(){
		$('#eight').addClass('highlight-circle');	
	},700);
	break;
	case 5:
	$('#current-progress').removeClass('slow-progress');
	$('#five').addClass('highlight-circle');
	setTimeout(function(){
		$('#six').addClass('highlight-circle');
	},350);
	setTimeout(function(){
		$('#seven').addClass('highlight-circle');
	},700);
	setTimeout(function(){
		$('#eight').addClass('highlight-circle');
	},1050);
	break;
	case 4:
	$('#current-progress').removeClass('slow-progress');
	$('#four').addClass('highlight-circle');
	setTimeout(function(){
		$('#five').addClass('highlight-circle');	
	},350);
	setTimeout(function(){
		$('#six').addClass('highlight-circle');	
	},700);
	setTimeout(function(){
		$('#seven').addClass('highlight-circle');	
	},1050);
	setTimeout(function(){
		$('#eight').addClass('highlight-circle');	
	},1400);
	break;
	case 3:
	$('#current-progress').addClass('slow-progress');
	$('#three').addClass('highlight-circle');
	setTimeout(function(){
		$('#four').addClass('highlight-circle');	
	},350);
	setTimeout(function(){
		$('#five').addClass('highlight-circle');	
	},700);
	setTimeout(function(){
		$('#six').addClass('highlight-circle');	
	},1050);
	setTimeout(function(){
		$('#seven').addClass('highlight-circle');	
	},1400);
	setTimeout(function(){
		$('#eight').addClass('highlight-circle');	
	},1750);
	break;
	case 2:
	$('#current-progress').addClass('slow-progress');
	$('#two').addClass('highlight-circle');
	setTimeout(function(){
		$('#three').addClass('highlight-circle');	
	},350);
	setTimeout(function(){
		$('#four').addClass('highlight-circle');	
	},700);
	setTimeout(function(){
		$('#five').addClass('highlight-circle');	
	},1050);
	setTimeout(function(){
		$('#six').addClass('highlight-circle');	
	},1400);
	setTimeout(function(){
		$('#seven').addClass('highlight-circle');	
	},1750);
	setTimeout(function(){
		$('#eight').addClass('highlight-circle');	
	},2100);
	break;
	case 1:
	$('#current-progress').addClass('slow-progress');
	$('#one').addClass('highlight-circle');
	setTimeout(function(){
		$('#two').addClass('highlight-circle');	
	},350);
	setTimeout(function(){
		$('#three').addClass('highlight-circle');	
	},700);
	setTimeout(function(){
		$('#four').addClass('highlight-circle');	
	},1050);
	setTimeout(function(){
		$('#five').addClass('highlight-circle');	
	},1400);
	setTimeout(function(){
		$('#six').addClass('highlight-circle');	
	},1750);
	setTimeout(function(){
		$('#seven').addClass('highlight-circle');	
	},2100);
	setTimeout(function(){
		$('#eight').addClass('highlight-circle');	
	},2450);
}

setTimeout(function(){
	lastClicked = 8;
}, 500);
});
});
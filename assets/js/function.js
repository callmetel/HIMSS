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

	 $('#one').on('click', function(){
	 	$('#progress-bar svg').removeClass().addClass('absolute-center stage1-is-active');
	 	$('#stage-1').removeClass(stagePositions).addClass('one-stage-pos');
	 	$('.stages-container').not('#stage-1').removeClass(stagePositions).addClass('no-stage-pos');
	 	$('.stage:eq(0)').addClass('top-layer');
	 	$('.stage').not('.stage:eq(0)').removeClass('top-layer');
	 	$('.stage-info:eq(0)').addClass('is-active-info');
	 	$('.stage-info').not('.stage-info:eq(0)').removeClass('is-active-info');

		switch (lastClicked) {
		    case 1:
		        $('#current-progress').removeClass('slow-progress');
		        console.log('you\'re already at that stage');
		        break;
		    case 2:
		    	$('#current-progress').removeClass('slow-progress');
		    	$('#two').removeClass('highlight-circle');
		 		setTimeout(function(){
		    		$('#one').addClass('highlight-circle');	
		    	},350);
		        break;
		    case 3:
		        $('#current-progress').removeClass('slow-progress');
		        $('#three').removeClass('highlight-circle');
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
		}

	 	setTimeout(function(){
	 		lastClicked = 1;
	 	}, 500);
	 });

	 $('#two').on('click', function(){
	 	$('#progress-bar svg').removeClass().addClass('absolute-center stage2-is-active');
	 	$('#stage-2').removeClass(stagePositions).addClass('one-stage-pos');
	 	$('#stage-1').removeClass(stagePositions).addClass('two-stage-pos');
	 	$('.stages-container').not('#stage-1, #stage-2').removeClass(stagePositions).addClass('no-stage-pos');
	 	$('.stage:eq(1)').addClass('top-layer');
	 	$('.stage').not('.stage:eq(1)').removeClass('top-layer');
	 	$('.stage-info:eq(1)').addClass('is-active-info');
	 	$('.stage-info').not('.stage-info:eq(1)').removeClass('is-active-info');

	 	if(lastClicked >= 2){
	 		switch (lastClicked) {
			    case 2:
			        $('#current-progress').removeClass('slow-progress');
			        console.log('you\'re already at that stage');
			        break;
			    case 3:
			    	$('#current-progress').removeClass('slow-progress');
			    	$('#three').removeClass('highlight-circle');	
			        break;
			    case 4:
			        $('#current-progress').removeClass('slow-progress');
			        $('#four').removeClass('highlight-circle');
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
			}
	 	} else{
	 		$('#current-progress').removeClass('slow-progress');
	 		$('#one').addClass('highlight-circle');
	 		setTimeout(function(){
	    		$('#two').addClass('highlight-circle');	
	    	},350);
	 	}
	 	
	 	setTimeout(function(){
	 		lastClicked = 2;
	 	}, 500);
	 });

	 $('#three').on('click', function(){
	 	$('#progress-bar svg').removeClass().addClass('absolute-center stage3-is-active');
	 	$('#stage-3').removeClass(stagePositions).addClass('one-stage-pos');
	 	$('#stage-2').removeClass(stagePositions).addClass('two-stage-pos');
	 	$('#stage-1').removeClass(stagePositions).addClass('three-stage-pos');
	 	$('.stages-container').not('#stage-1, #stage-2, #stage-3').removeClass(stagePositions).addClass('no-stage-pos');
	 	$('.stage:eq(2)').addClass('top-layer');
	 	$('.stage').not('.stage:eq(2)').removeClass('top-layer');
	 	$('.stage-info:eq(2)').addClass('is-active-info');
	 	$('.stage-info').not('.stage-info:eq(2)').removeClass('is-active-info');

	 	if(lastClicked >= 3){
	 		switch (lastClicked) {
			    case 3:
			        $('#current-progress').removeClass('slow-progress');
			        console.log('you\'re already at that stage');
			        break;
			    case 4:
			    	$('#current-progress').removeClass('slow-progress');
			    	$('#four').removeClass('highlight-circle');	
			        break;
			    case 5:
			        $('#current-progress').removeClass('slow-progress');
			        $('#five').removeClass('highlight-circle');
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
			}
	 	} else if(lastClicked < 3){
	 		switch (lastClicked) {
			    case 1:
			        $('#current-progress').removeClass('slow-progress');
			        $('#one').addClass('highlight-circle');
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
			 		setTimeout(function(){
			    		$('#three').addClass('highlight-circle');	
			    	},350);
			}
	 	}

	 	setTimeout(function(){
	 		lastClicked = 3;
	 	}, 500);
	 });

	 $('#four').on('click', function(){
	 	$('#progress-bar svg').removeClass().addClass('absolute-center stage4-is-active');
	 	$('#stage-4').removeClass(stagePositions).addClass('one-stage-pos');
	 	$('#stage-3').removeClass(stagePositions).addClass('two-stage-pos');
	 	$('#stage-2').removeClass(stagePositions).addClass('three-stage-pos');
	 	$('#stage-1').removeClass(stagePositions).addClass('four-stage-pos');
	 	$('.stages-container').not('#stage-1, #stage-2, #stage-3, #stage-4').removeClass(stagePositions).addClass('no-stage-pos');
	 	$('.stage:eq(3)').addClass('top-layer');
	 	$('.stage').not('.stage:eq(3)').removeClass('top-layer');
	 	$('.stage-info:eq(3)').addClass('is-active-info');
	 	$('.stage-info').not('.stage-info:eq(3)').removeClass('is-active-info');

	 	if(lastClicked >= 4){
	 		switch (lastClicked) {
			    case 4:
			        $('#current-progress').removeClass('slow-progress');
			        console.log('you\'re already at that stage');
			        break;
			    case 5:
			    	$('#current-progress').removeClass('slow-progress');
			    	$('#five').removeClass('highlight-circle');	
			        break;
			    case 6:
			        $('#current-progress').removeClass('slow-progress');
			        $('#six').removeClass('highlight-circle');
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
			}
	 	} else if(lastClicked < 4){
	 		switch (lastClicked) {
			    case 1:
			        $('#current-progress').removeClass('slow-progress');
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
			        break;
			    case 2:
			        $('#current-progress').removeClass('slow-progress');
			        $('#two').addClass('highlight-circle');
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
			 		setTimeout(function(){
			    		$('#four').addClass('highlight-circle');	
			    	},350);
			}
	 	}

	 	setTimeout(function(){
	 		lastClicked = 4;
	 	}, 500);
	 });

	 $('#five').on('click', function(){
	 	$('#progress-bar svg').removeClass().addClass('absolute-center stage5-is-active');
	 	$('#stage-5').removeClass(stagePositions).addClass('one-stage-pos');
	 	$('#stage-4').removeClass(stagePositions).addClass('two-stage-pos');
	 	$('#stage-3').removeClass(stagePositions).addClass('three-stage-pos');
	 	$('#stage-2').removeClass(stagePositions).addClass('four-stage-pos');
	 	$('#stage-1').removeClass(stagePositions).addClass('five-stage-pos');
	 	$('.stages-container').not('#stage-1, #stage-2, #stage-3, #stage-4, #stage-5').removeClass(stagePositions).addClass('no-stage-pos');
	 	$('.stage:eq(4)').addClass('top-layer');
	 	$('.stage').not('.stage:eq(4)').removeClass('top-layer');
	 	$('.stage-info:eq(4)').addClass('is-active-info');
	 	$('.stage-info').not('.stage-info:eq(4)').removeClass('is-active-info');
	 	
	 	if(lastClicked >= 5){
	 		switch (lastClicked) {
			    case 5:
			        $('#current-progress').removeClass('slow-progress');
			        console.log('you\'re already at that stage');
			        break;
			    case 6:
			    	$('#current-progress').removeClass('slow-progress');
			    	$('#six').removeClass('highlight-circle');	
			        break;
			    case 7:
			        $('#current-progress').removeClass('slow-progress');
			        $('#seven').removeClass('highlight-circle');
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
			    	setTimeout(function(){
			    		$('#seven').removeClass('highlight-circle');	
			    	},350);
			    	setTimeout(function(){
			    		$('#six').removeClass('highlight-circle');	
			    	},700);
			    	setTimeout(function(){
			    		$(this).addClass('highlight-circle');	
			    	},1050);
			}
	 	} else if(lastClicked < 5){
	 		switch (lastClicked) {
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
			        break;
			    case 3:
			        $('#current-progress').removeClass('slow-progress');
			        $('#three').addClass('highlight-circle');
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
			 		setTimeout(function(){
			    		$('#five').addClass('highlight-circle');	
			    	},350);
			}
	 	}

	 	setTimeout(function(){
	 		lastClicked = 5;
	 	}, 500);
	 });
	 $('#six').on('click', function(){
	 	$('#progress-bar svg').removeClass().addClass('absolute-center stage6-is-active');
	 	$('#stage-6').removeClass(stagePositions).addClass('one-stage-pos');
	 	$('#stage-5').removeClass(stagePositions).addClass('two-stage-pos');
	 	$('#stage-4').removeClass(stagePositions).addClass('three-stage-pos');
	 	$('#stage-3').removeClass(stagePositions).addClass('four-stage-pos');
	 	$('#stage-2').removeClass(stagePositions).addClass('five-stage-pos');
	 	$('#stage-1').removeClass(stagePositions).addClass('six-stage-pos');
	 	$('.stages-container').not('#stage-1, #stage-2, #stage-3, #stage-4, #stage-5, #stage-6').removeClass(stagePositions).addClass('no-stage-pos');
	 	$('.stage:eq(5)').addClass('top-layer');
	 	$('.stage').not('.stage:eq(5)').removeClass('top-layer');
	 	$('.stage-info:eq(5)').addClass('is-active-info');
	 	$('.stage-info').not('.stage-info:eq(5)').removeClass('is-active-info');

	 	if(lastClicked >= 6){
	 		switch (lastClicked) {
			    case 6:
			        $('#current-progress').removeClass('slow-progress');
			        console.log('you\'re already at that stage');
			        break;
			    case 7:
			    	$('#current-progress').removeClass('slow-progress');
			    	$('#seven').removeClass('highlight-circle');	
			        break;
			    case 8:
			        $('#current-progress').removeClass('slow-progress');
			        $('#eight').removeClass('highlight-circle');
			    	setTimeout(function(){
			    		$('#seven').removeClass('highlight-circle');	
			    	},350);
			    	setTimeout(function(){
			    		$(this).addClass('highlight-circle');	
			    	},700);
			}
	 	} else if(lastClicked < 6){
	 		switch (lastClicked) {
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
			        break;
			    case 3:
			        $('#current-progress').removeClass('slow-progress');
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
			        break;
			    case 5:
			    	$('#current-progress').removeClass('slow-progress');
			    	$('#five').addClass('highlight-circle');
			 		setTimeout(function(){
			    		$('#six').addClass('highlight-circle');	
			    	},350);
			}
	 	}

	 	setTimeout(function(){
	 		lastClicked = 6;
	 	}, 500);
	 });
	 $('#seven').on('click', function(){
	 	$('#progress-bar svg').removeClass().addClass('absolute-center stage7-is-active');
	 	$('#stage-7').removeClass(stagePositions).addClass('one-stage-pos');
	 	$('#stage-6').removeClass(stagePositions).addClass('two-stage-pos');
	 	$('#stage-5').removeClass(stagePositions).addClass('three-stage-pos');
	 	$('#stage-4').removeClass(stagePositions).addClass('four-stage-pos');
	 	$('#stage-3').removeClass(stagePositions).addClass('five-stage-pos');
	 	$('#stage-2').removeClass(stagePositions).addClass('six-stage-pos');
	 	$('#stage-1').removeClass(stagePositions).addClass('seven-stage-pos');
	 	$('.stages-container').not('#stage-1, #stage-2, #stage-3, #stage-4, #stage-5, #stage-6, #stage-7').removeClass(stagePositions).addClass('no-stage-pos');
	 	$('.stage:eq(6)').addClass('top-layer');
	 	$('.stage').not('.stage:eq(6)').removeClass('top-layer');
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
			}
	 	} else if(lastClicked < 7){
	 		switch (lastClicked) {
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
			        break;
			    case 4:
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
	 });
	 $('#eight').on('click', function(){
	 	$('#progress-bar svg').removeClass().addClass('absolute-center stage8-is-active');
	 	$('#stage-8').removeClass(stagePositions).addClass('one-stage-pos');
	 	$('#stage-7').removeClass(stagePositions).addClass('two-stage-pos');
	 	$('#stage-6').removeClass(stagePositions).addClass('three-stage-pos');
	 	$('#stage-5').removeClass(stagePositions).addClass('four-stage-pos');
	 	$('#stage-4').removeClass(stagePositions).addClass('five-stage-pos');
	 	$('#stage-3').removeClass(stagePositions).addClass('six-stage-pos');
	 	$('#stage-2').removeClass(stagePositions).addClass('seven-stage-pos');
	 	$('#stage-1').removeClass(stagePositions).addClass('eight-stage-pos');
	 	$('.stage:eq(7)').addClass('top-layer');
	 	$('.stage').not('.stage:eq(7)').removeClass('top-layer');
	 	$('.stage-info:eq(7)').addClass('is-active-info');
	 	$('.stage-info').not('.stage-info:eq(7)').removeClass('is-active-info');

	 	setTimeout(function(){
	 		setTimeout(function(){
				$('#stage-8').removeClass(stagePositions).addClass('one-stage-pos');
	 		}, 250);
	 		setTimeout(function(){
				$('#stage-7').removeClass(stagePositions).addClass('one-stage-pos');
	 		}, 500);
	 		setTimeout(function(){
				$('#stage-6').removeClass(stagePositions).addClass('one-stage-pos');
	 		}, 750);
	 		setTimeout(function(){
				$('#stage-5').removeClass(stagePositions).addClass('one-stage-pos');
	 		}, 1000);
	 		setTimeout(function(){
				$('#stage-4').removeClass(stagePositions).addClass('one-stage-pos');
	 		}, 1250);
	 		setTimeout(function(){
				$('#stage-3').removeClass(stagePositions).addClass('one-stage-pos');
	 		}, 1500);
	 		setTimeout(function(){
				$('#stage-2').removeClass(stagePositions).addClass('one-stage-pos');
	 		}, 1750);
	 		setTimeout(function(){
				$('#stage-1').removeClass(stagePositions).addClass('one-stage-pos');
	 		}, 2000);
	 		setTimeout(function(){
				$('#stage-1, #stage-2, #stage-3, #stage-4, #stage-5, #stage-6, #stage-7, #stage-8').removeClass(stagePositions).addClass('flat-stage-pos');
	 		}, 2750);
	 	},2250);

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
		        $('#three').removeClass('highlight-circle');
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
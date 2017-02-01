$(document).ready(function() {
	 $('.menu-item:eq(0)').on('click', function(){
	 	$('#menu').removeClass().addClass('tab1-is-active');
	 });
	 $('.menu-item:eq(1)').on('click', function(){
	 	$('#menu').removeClass().addClass('tab2-is-active');
	 });
	 $('.menu-item:eq(2)').on('click', function(){
	 	$('#menu').removeClass().addClass('tab3-is-active');
	 });
	 $('.menu-item:eq(3)').on('click', function(){
	 	$('#menu').removeClass().addClass('tab4-is-active');
	 });

	 var lastClicked = 1;

	 $('#one').on('click', function(){
	 	$('#progress-bar svg').removeClass().addClass('absolute-center stage1-is-active');

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
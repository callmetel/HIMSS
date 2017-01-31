$(document).ready(function() {
	 $('.menu-item:eq(0)').on('click', function(){
	 	$('#menu').removeClass('tab2-is-active tab3-is-active tab4-is-active').addClass('tab1-is-active');
	 });
	 $('.menu-item:eq(1)').on('click', function(){
	 	$('#menu').removeClass('tab1-is-active tab3-is-active tab4-is-active').addClass('tab2-is-active');
	 });
	 $('.menu-item:eq(2)').on('click', function(){
	 	$('#menu').removeClass('tab1-is-active tab2-is-active tab4-is-active').addClass('tab3-is-active');
	 });
	 $('.menu-item:eq(3)').on('click', function(){
	 	$('#menu').removeClass('tab1-is-active tab2-is-active tab3-is-active').addClass('tab4-is-active');
	 });
});
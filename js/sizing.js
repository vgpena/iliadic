$(window).on("load resize", function(){
	height = $(window).height();
	width = $(window).width();
	$('#one').height(height);
	$('#four').height(height);
	$('#five').height((775/1000)*width);
});

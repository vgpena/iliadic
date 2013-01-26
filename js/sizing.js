$(window).on("load resize", function(){
	height = $(window).height();
	$('#one').height(height);
	$('#four').height(height);
	$('#five').height($('.soldiers').height());
});

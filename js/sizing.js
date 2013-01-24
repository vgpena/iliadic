height = $(window).height();

$(window).on("load resize", function(){
	$('#one').height(height);
});

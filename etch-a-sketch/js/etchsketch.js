$(document).ready(function(){
	var suareside = 16;
	var height = 40;
	var width = 40;

	$('.container').height(height*suareside);
	$('.container').width(width*suareside);

	for(var rows = 0; rows < width; rows++){
	$('<div id="gridSquare"></div>').appendTo('.container')
		for(var cols = 0; cols < height; cols++){
			$('<div id="gridSquare"></div>').appendTo('.container')
		}
	}

	$('.container').on('mouseenter', '#gridSquare', function(){
		$(this).css('background-color', 'white');
	});

});
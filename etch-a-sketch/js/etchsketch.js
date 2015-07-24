$(document).ready(function(){
	var numSquares = 20;
	var squareSide = 660 / numSquares;


	console.log(squareSide);

	for(var rows = 0; rows < numSquares; rows++){
	$('<div class="gridSquare"></div>').appendTo('.container')
		for(var cols = 0; cols < numSquares; cols++){
			$('<div class="gridSquare"></div>').appendTo('.container')
		}
	}


	$('.container').on('mouseenter', '.gridSquare', function(){
		$(this).css('background-color', 'white');
	});

	$('.gridSquare').width(squareSide);
	$('.gridSquare').height(squareSide);

	$('#reset').click(function(){


	});

	funtion
});


function setup(){

	
}
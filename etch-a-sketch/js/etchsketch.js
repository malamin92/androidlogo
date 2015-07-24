$(document).ready(function(){

	setup(50);	

});

$('#reset').click(function(){

		$('.container').empty();

		userChoice = prompt("Enter how many boxes you want in each row and column (Less than 120):");
		setup(userChoice);
});

function setup(numOfSquares){

	var numSquares = numOfSquares;
	var squareSide = 500 / numSquares;
	var totalSquares = numSquares * numSquares;


	for(var rows = 0; rows < totalSquares; rows++){
	$('<div class="gridSquare"></div>').appendTo('.container')
	}


	$('.container').on('mouseenter', '.gridSquare', function(){
		$(this).css('background-color', 'black');
	});

	$('.gridSquare').width(squareSide);
	$('.gridSquare').height(squareSide);

}
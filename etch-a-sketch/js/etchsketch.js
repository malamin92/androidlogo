$(document).ready(function(){

	setup(50);	

});

$('#reset').click(function(){

		$('.container').empty();

		userChoice = prompt("Enter how many boxes you want in each row and column (Less than 120):");
		setup(userChoice);
});

$('#randomize').click(function(){

		$('.container').empty();

		userChoice = prompt("Enter how many boxes you want in each row and column (Less than 120):");
		randomSetup(userChoice);
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

function randomColor(){

	return Math.random() * (255 - 0) + 1;
}

function randomSetup(numOfSquares){

	var numSquares = numOfSquares;
	var squareSide = 500 / numSquares;
	var totalSquares = numSquares * numSquares;


	for(var rows = 0; rows < totalSquares; rows++){
	$('<div class="gridSquare"></div>').appendTo('.container')
	}
    
	$('.container').on('mouseenter', '.gridSquare', function(){
		
        var colors = [];
        color1 = Math.round(randomColor());
        color2 = Math.round(randomColor());
        color3 = Math.round(randomColor());       
        
        $(this).css('background-color', 'rgb('+color1+','+color2+','+color3+')');
	});

	$('.gridSquare').width(squareSide);
	$('.gridSquare').height(squareSide);

}
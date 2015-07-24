$(document).ready(function(){

	setup(50);	//Iinitializes the first etch-a-sketch with 50 rows and columns

});

//function that runs once the reset button is clicked
$('#reset').click(function(){

		$('.container').empty();

		//User is asked to enter the dimension of the sketch 
		//variable is sent to the setup function
		userChoice = prompt("Enter how many boxes you want in each row and column (Less than 120):");
		setup(userChoice);
});

//executes the randomSetup function
$('#randomize').click(function(){

		$('.container').empty();

		userChoice = prompt("Enter how many boxes you want + in each row and column (Less than 120):");
		randomSetup(userChoice);
});

function setup(numOfSquares){

	var numSquares = numOfSquares;//how many #gridSquares in each row and column
	var squareSide = 500 / numSquares;//Length of the squares
	var totalSquares = numSquares * numSquares;//How many total squares to be made by the for loop


	for(var rows = 0; rows < totalSquares; rows++){
	$('<div class="gridSquare"></div>').appendTo('.container')//create a div until total is reached
	}

	//on mouseenter, change the background-color css property
	$('.container').on('mouseenter', '.gridSquare', function(){
		$(this).css('background-color', 'black');
	});

	//set the width and height of the squares produced by the for loop
	$('.gridSquare').width(squareSide);
	$('.gridSquare').height(squareSide);

}

//Returns a value between 0 - 255
//Used for RGB
function randomColor(){

	return Math.random() * (255 - 0) + 1;
}

//Same as the regular setup except on mouseenter, rturns the value from
//randomColor() to be passed as arguments to rgb()
//Used to randomize each color
function randomSetup(numOfSquares){

	var numSquares = numOfSquares;
	var squareSide = 500 / numSquares;
	var totalSquares = numSquares * numSquares;


	for(var rows = 0; rows < totalSquares; rows++){
	$('<div class="gridSquare"></div>').appendTo('.container')
	}
    
	$('.container').on('mouseenter', '.gridSquare', function(){
		
		//run randomColor() here so the function runs every time mouseenters
        color1 = Math.round(randomColor());
        color2 = Math.round(randomColor());
        color3 = Math.round(randomColor());       
        
        $(this).css('background-color', 'rgb('+color1+','+color2+','+color3+')');//use ++ to connect each digit
	});

	$('.gridSquare').width(squareSide);
	$('.gridSquare').height(squareSide);

}
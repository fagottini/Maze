var nRows = 0;
var nCols = 0;
var CELL_SIZE = 23;
var random = Math.random()*4+1;
random = Math.floor(random);
console.log(random);
var labyrinth = null;



randomMaze();


function randomMaze(){
	switch(random){
		case 1:
			nRows = 20;
			nCols = 20;
			labyrinth = labyrinthgenerator(nRows, nCols);
			break;
		case 2:
			nRows = 25;
			nCols = 25;
			labyrinth = labyrinthgenerator(nRows, nCols);
			break;
			
		case 3:
			nRows = 30;
			nCols = 30;
			labyrinth = labyrinthgenerator(nRows, nCols);
			break;
			
	
		case 4: 
			nRows = 35;
			nCols = 35;
			labyrinth = labyrinthgenerator(nRows, nCols);
			break;
	}
}


function genPlanetA(){
	var CELL_SIZE = 23;
	nRows = 30;
	nCols = 30;
	canvas.width = nRows*CELL_SIZE;
	canvas.height = nCols*CELL_SIZE;
	labyrinth = labyrinthgenerator(nRows, nCols);
	gamerunning = false
	stopTick();
	render();
}
function genPlanetB(){
	var CELL_SIZE = 23;
	nRows = 15;
	nCols = 15;
	canvas.width = nRows*CELL_SIZE;
	canvas.height = nCols*CELL_SIZE;
	labyrinth = labyrinthgenerator(nRows, nCols);
	gamerunning = false
	stopTick();
	render();

}
function genPlanetC(){
	var CELL_SIZE = 23;
	nRows = 20;
	nCols = 20;
	canvas.width = nRows*CELL_SIZE;
	canvas.height = nCols*CELL_SIZE;
	labyrinth = labyrinthgenerator(nRows, nCols);
	gamerunning = false
	stopTick();
	render();

}
function genPlanetD(){
	var CELL_SIZE = 23;
	nRows = 25;
	nCols = 25;
	canvas.width = nRows*CELL_SIZE;
	canvas.height = nCols*CELL_SIZE;
	labyrinth = labyrinthgenerator(nRows, nCols);
	gamerunning = false
	stopTick();
	render();

}




// Generate labyrinth


// Initialize array to count number of times the player stepped in each location
var floorTiles = [];
for(var i = 0; i < nRows*nCols; i++)
	floorTiles[i] = 0;
var playerCell = 0;
floorTiles[playerCell] = 1;



// Set up kayboard event listener and keyCodes
window.addEventListener("keydown", keyboardHandler, false);
var UP = 38;
var DOWN = 40;
var RIGHT = 39;
var LEFT = 37;

// Set up HTML5 canvas
var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");
canvas.width = nRows*CELL_SIZE;
canvas.height = nCols*CELL_SIZE;


var gamerunning = false;
// Draw starting situation
render();


// Handles keyboard input
function keyboardHandler(event)
{
	if(!gamerunning && event.keyCode >= 37 && event.keyCode <= 40)
	{
		stopwatch();
		gamerunning = true;
	}
	// Get player (x, y) position from index
	var playerRow = Math.floor(playerCell/nRows);
	var playerCol = playerCell % nCols;
	
	// Find out where the player wants to go
	var nextCell = -1;
	switch(event.keyCode)
	{
		case UP:
			if(playerRow > 0)
				nextCell = playerCell - nCols;
			break;
		case DOWN:
			if(playerRow < nRows - 1)
				nextCell = playerCell + nCols;
			break;
		case LEFT:
			if(playerCol > 0)
				nextCell = playerCell - 1;
			break;
		case RIGHT:
			if(playerCol < nCols - 1)
				nextCell = playerCell + 1;
			break
	}
	
	// If arrow key was pressed and cells playerCell and nextCell are adjacent, move player and update game state
	if(nextCell >= 0 && labyrinth[playerCell][nextCell])
	{
		playerCell = nextCell;
		floorTiles[playerCell] = floorTiles[playerCell] + 1;
		render();
	}
	
	// If the player is at the bottom right corner he has won
	if(playerCell == nRows*nCols-1)
	{
		window.removeEventListener("keydown", keyboardHandler, false);
		var nSteps = 0;
		var nBacktrack = 0;
		for(var i = 0; i < nRows*nCols; i++)
		{
			nSteps += floorTiles[i] > 0;
			nBacktrack += floorTiles[i];
		}
		nBacktrack = nBacktrack - nSteps;
		stopTick();
		Swal.fire({
			
			icon: 'success',
			confirmButtonText: 'Finish',
			confirmButtonColor: "#94ff96",
			background: '#63015b',
			html: '<span style="color:white; font-weight: bold; font-size: 20px; border-bottom: 2px solid white">GOOD JOB!</span><br><span style="color:white;">You have finished the MAZE</span>'
		  })
	
	}
}





// Draws the labyrinth walls and heatmap of player steps
function render()
{
	// Draw player position, exit and heatmap
	drawingSurface.clearRect(0, 0, canvas.width, canvas.height);
	for(var cell = 0; cell < nRows*nCols; cell++)
	{
		var cellRow = Math.floor(cell/nRows);
		var cellCol = cell % nCols;
		if(cell == playerCell)
			drawingSurface.fillStyle = "white";
		else if(cell == nRows*nCols-1)
			drawingSurface.fillStyle = "black";
		else
			drawingSurface.fillStyle = "#63015b";
		drawingSurface.fillRect(cellCol*CELL_SIZE, cellRow*CELL_SIZE, CELL_SIZE, CELL_SIZE);
	}

	// Draw walls over heatmap
	drawingSurface.lineWidth = 2;
	for(var cell = 0; cell < nRows*nCols; cell++)
	{
		var cellRow = Math.floor(cell/nRows);
		var cellCol = cell % nCols;
		if(cellRow < nRows - 1)
			if(!labyrinth[cell][cell+nCols])
			{
				drawingSurface.beginPath();
				drawingSurface.moveTo(cellCol*CELL_SIZE, (cellRow+1)*CELL_SIZE);
				drawingSurface.lineTo((cellCol+1)*CELL_SIZE, (cellRow+1)*CELL_SIZE);
				drawingSurface.stroke();
			}
		if(cellCol < nCols - 1)
			if(!labyrinth[cell][cell+1])
			{
				drawingSurface.beginPath();
				drawingSurface.moveTo((cellCol+1)*CELL_SIZE, cellRow*CELL_SIZE);
				drawingSurface.lineTo((cellCol+1)*CELL_SIZE, (cellRow+1)*CELL_SIZE);
				drawingSurface.stroke();
			}
	}
}
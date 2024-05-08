window.addEventListener('load', (event) =>{
let name;
//this asks your name and provides you with a personal greeting
name = prompt("What is your name? ", "");
document.getElementById('personalGreeting').innerHTML = `Welcome, ${name}. Are you ready to play?`; 
});  //End load event

//These lines are to determine a random X coordinate
let xCoord;
function xLocation(){
return Math.floor(Math.random() * 600);
}
//These lines are to determine a random Y coordinate
let yCoord;
function yLocation(){
return Math.floor(Math.random() * 250);
}

//These lines are to get a random amount of time
function randTime(){
return Math.floor(Math.random() * 2000);    
}

//most of our variables to determine seconds, the score, the timer, and the image id count.
let seconds = 30;
let gameScore = 0;
let clock;
let t;
let extra;
let count = 0;    

//when this function is called, the score increases by 1 and that is demonstrated on the HTML
function updateScore(){
	gameScore +=1;
	document.getElementById('score').innerHTML = `${gameScore} pts`; 
}
//when this function is called, the game will begin counting down from 30, and will stop at 0 seconds. It will display each seconds value until it gets to 0.
function countdown(){
    if (seconds < 0){
        clearTimeout(clock);
        clearTimeout(t);
        $(".target").hide();
        start_button.disabled = false;
        resetGame();
    }
    else{
        document.getElementById('countdown').innerHTML = `${seconds} Seconds Left`; 
        seconds-=1;
        clock = setTimeout("countdown()", 1000);
    }
}

function resetGame(){
    score = 0;
    seconds = 30;    
}



//this function was intended to add a different id to every duck. I could not figure it out after over 12 hours. 
function add(){
    $("#gamespace").append(`<p id="textA${count}"></p>`);
    count++;
    extra = setTimeout(add,1000);
}
//this function is used to add our target, a duck. The setTimeout function is used to run the addImage function at random intervals (using the randTime function we made)
function addImage(){
    var xPos = xLocation();
    var yPos = yLocation();
    $('#gamespace').append(`<img src="images/singleLeafSummer.png" alt="leaf" class="target" id="createID" style="left:${xPos}px; top:${yPos}px;">`);
    t = setTimeout("addImage()", randTime());
}

$(document).ready(function(){
	//this displays our countdowm
	$('#countdown').fadeIn(1000);
	
    //this applies css to the button element
	$('#start_button').css({
		"width": "90px",
		"height": "60px",
		"font-size": "20px",
		"backgroundColor": "#3f6347",
		"color": "white",
		"font-family": "Lucida Console"
	});
	
    //When the start button is clicked, the addImage() and countdown() functions are called, and the button is disabled so it cannot be pressed again.
	$('#start_button').click(function(){
        addImage();
        countdown();
        start_button.disabled = true;
	});
    //this allows for the removal of the image once that image is clicked on
    $("#gamespace").on("click","img", function(){
    updateScore();
     $(this). hide();
    });
	
    //this adds a footer
    $("#footer").load("load.html");
    
});
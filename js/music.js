var audio = new Audio("music/Vicetone _ Tony Igy - Astronomia.mp3");
var index = 0;

function playAudio(gamerunning){
    if(index == 0 && gamerunning == true){
        audio.play();
        index = 1;
    }
    if(index == 1 && gamerunning == false){
        index = 0;
        audio.pause();
        audio.currentTime = 0;
    }  
}
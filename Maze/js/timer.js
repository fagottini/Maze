var seconds = 0;
var mytimer = 0;
var minutes = 0;
function stopwatch(){
    const time = document.getElementById("timer").innerHTML;
    if(time.localeCompare("00:00") == 0){
        tick();
    }
}
function tick(){
    mytimer = setInterval(function(){
        seconds += 1;
        if(minutes == 0){
            document.getElementById("timer").innerHTML = "00:0" + seconds;  
        }
        if(seconds > 9 && minutes == 0){
            document.getElementById("timer").innerHTML = "00:" + seconds;
        }
        if(seconds > 59){
            seconds = 0;
            minutes += 1;
            document.getElementById("timer").innerHTML = "0" + minutes + ":0" + seconds;
        }
        if(minutes > 0 && minutes < 10){
            if(seconds < 10){
                document.getElementById("timer").innerHTML = "0" + minutes + ":0" + seconds;
            }
            else{
                document.getElementById("timer").innerHTML = "0" + minutes + ":" + seconds;
            }
        }
        if(minutes > 9){
            if(seconds < 10){
                document.getElementById("timer").innerHTML = minutes + ":0" + seconds;
            }
            else{
                document.getElementById("timer").innerHTML = minutes + ":" + seconds;
            }
        }
    },1000);
}

function stopTick(){
    clearInterval(mytimer);
    document.getElementById("timer").innerHTML = "00:00";
    seconds = 0;
    minutes = 0;
}
var num = 0;
var mytimer = 0;

function lightning(planet){
    mytimer = setInterval(function(){
        num += 1;
        if(num%2==1 && planet == 1){
            document.getElementById("container").style.boxShadow = "2px 2px 33px 3px #ff4f19";
            document.getElementById("container").style.transition = "boxshadow 0.1s";
        }
        if(num%2==1 && planet == 2){
            document.getElementById("container").style.boxShadow = "2px 2px 33px 3px #fee08b";
            document.getElementById("container").style.transition = "boxshadow 0.1s";
        }
        if(num%2==1 && planet == 4){
            document.getElementById("container").style.boxShadow = "2px 2px 33px 3px #f47421";
            document.getElementById("container").style.transition = "boxshadow 0.1s";
        }
        if(num%2==1 && planet == 3){
            document.getElementById("container").style.boxShadow = "2px 2px 33px 3px #add8e6";
            document.getElementById("container").style.transition = "boxshadow 0.1s";
        }
        if(num%2==0){
             document.getElementById("container").style.boxShadow = "2px 2px 33px 3px rgba(0,0,0,0.52)";
             document.getElementById("container").style.transition = "boxshadow 0.1s";
        }
    },500)
}
function stoplightning(){
    clearInterval(mytimer);
    document.getElementById("container").style.boxShadow = "2px 2px 33px 20px rgba(0,0,0,0.52)";
    document.getElementById("container").style.transition = "boxshadow 0.3s";
}
function textApear(){
    document.getElementById("game_title").innerHTML = "Through The Space"
    document.getElementById("game_title").style.opacity = "0";
    
    setTimeout(function(){
        
        document.getElementById("game_title").style.opacity = "1"; 
        document.getElementById("game_title").style.transition = "opacity 0.8s";
    }, 500);
    

}
function showInfo(){
    Swal.fire({
        text: "Press ←↑↓→ to move around the maze",
        icon: 'info',
        confirmButtonText: 'Okay',
        confirmButtonColor: "light-blue",
        background: '#63015b',
        html: '<span style="color:white; font-weight: bold; font-size: 20px; border-bottom: 2px solid white">INFORMATIONS!</span><br><span style="color:white;">Press ←↑↓→ to move around the maze</span><br><span style="color:white">By pressing the Planets you will change the maze difficulty</span>'
      })
}
//$(function(){
    
//   $(".flash").fadeIn(10).fadeOut(50); 
//});



var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}





//afficher suite
//$( ".suite" ).show();
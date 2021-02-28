         
    //Faire disparaître le bouton après avoir commencé la lecture
    
    function faireDisparaitreBouton () {
        document.getElementById("disparition").innerHTML = "";
    }
    
                    
  //Faire jouer / arrêter la musique quand on appuie sur le bouton
                    
       var x = document.getElementById("debussy"); 
         
         function playAudio() { 
           x.play(); 
         } 
         
         function pauseAudio() { 
           x.pause(); 
         } 
                       
                       
                     
             
 // Arrêter l'audio avec la barre espace          
           
       
       var audio = document.querySelector('audio');

if (audio) {

  window.addEventListener('keydown', function (event) {

    var key = event.which || event.keyCode;

    if (key === 32) { // spacebar

      event.preventDefault();

      audio.paused ? audio.play() : audio.pause();
      
    }

  });
}
       



            
 // Éclair qui apparaît de façon aléatoire
       
 function randRange(data) {
       var newTime = data[Math.floor(data.length * Math.random())];
       return newTime;
}

function toggleSomething() {
       var timeArray = new Array(4000, 300, 150, 250, 2000, 3000, 1000, 1500);

            $(".flash").fadeIn(20).fadeOut(70); 

       clearInterval(timer);
       timer = setInterval(toggleSomething, randRange(timeArray));
}

var timer = setInterval(toggleSomething, 1000);
        
            
            
            
            
      



                       
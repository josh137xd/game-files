let score = 0;
const scoreDisplay = document.getElementById("score-display");
const pochita = document.getElementById("img2");
const cone = document.getElementById("img3");

// function jump to add jump delay
function jump() {
  if (pochita.classList != "jump") {
    pochita.classList.add("jump");

    setTimeout(function () {
      pochita.classList.remove("jump");
    }, 300);
  }
}
 
  
// keybinding jump 
document.addEventListener("keydown", function (event) {
  jump();
});

//getting values from pochita and cone

let isAlive = setInterval(function(){
// pochita y position
   let pochitaTop = parseInt(window.getComputedStyle(pochita).getPropertyValue("top")
   );
   console.log(pochitaTop);
// cone x position
   let coneLeft = parseInt(window.getComputedStyle(cone).getPropertyValue("left")
   );
// hit markers
   if (coneLeft < 135 && coneLeft > 45 && pochitaTop >= 560){
   alert("GAME OVER")
   };
  }, 10 );
 


  
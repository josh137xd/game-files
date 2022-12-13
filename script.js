var score = 0;
//const scoreElem = document.querySelector("[data-score]");
const pochita = document.getElementById("pochita");
const cone = document.getElementById("cone");
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
   if (coneLeft <240 && coneLeft > 190 && pochitaTop >=430){
   alert("GAME OVER")
   }
}, 10);
  //function updateScore(delta) {
    //score += delta * 0.01 
    //scoreElem.textContent = Math.floor(score)
  //};
  function updateScore() {
    score += 10;
  }
  setInterval(updateScore, 1000);
  document.getElementById("score-container").innerHTML = score;


  
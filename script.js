const pochita = document.getElementById("pochita");
const cone = document.getElementById("cone ");
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
   let pochita = parseInt (window.getComputedStyle(pochita).getPropertyValue("top")
   );
   console.log(pochitaTop);
// cone x position
   let cone = parseInt(window.getComputedStyle(cone).getPropertyValue("left")
   );
// hit markers



}, 10);
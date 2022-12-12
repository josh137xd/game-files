const pochita = document.getElementById("pochita");
const cone = document.getElementById("cone ");

function jump() {
  if (pochita.classList != "jump") {
    pochita.classList.add("jump");

    setTimeout(function () {
      pochita.classList.remove("jump");
    }, 300);
  }
}

   
document.addEventListener("keydown", function (event) {
  jump();
});
const buttonSetColor = document.getElementById("button-set-color");

function setStyleColor() {
square.style.backgroundColor = "blue";
}
function changeColor() {
button.classList.toggle("square-blue");
}

buttonSetColor.addEventListener("click", changeColor);

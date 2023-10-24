const buttonSetColor = document.getElementById("button-set-color");

function setStyleColor() {
button.style.backgroundColor = "blue";
}
function changeColor() {
button.classList.toggle("button-blue");
}

buttonSetColor.addEventListener("click", changeColor);

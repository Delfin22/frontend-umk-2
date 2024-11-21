var colors = ["brown", "red", "purple", "pink", "yellow", "black"];
var i = 0;
function increment() {
  var n = document.getElementById("label0");
  n.innerHTML = Number(n.innerText) + 1;
}
function changeColor() {
  var n = document.getElementById("label0");
  n.style.color = colors[i];
  i = (i + 1) % colors.length;
}

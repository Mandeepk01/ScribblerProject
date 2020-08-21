var mdl = document.getElementById("myModal1");
var topBtn1 = document.getElementById("top-button1");
var topBtn2 = document.getElementById("top-button2");
var span = document.getElementsByClassName("close")[0];

topBtn1.onclick = function() {
  mdl.style.display = "block";
}
topBtn2.onclick = function() {
  mdl.style.display = "block";
}
span.onclick = function() {
  mdl.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == mdl) {
    modal.style.display = "none";
  }
}

var mdl = document.getElementById("myModal1");
var topBtn1 = document.getElementById("top-button1");
var topBtn2 = document.getElementById("top-button2");
var span = document.getElementsByClassName("close")[0];
var mdl2 = document.getElementById("myModal2");
var span2 = document.getElementsByClassName("close")[1];
topBtn1.onclick = function() {
  mdl.style.display = "block";
}
topBtn2.onclick = function() {
  mdl2.style.display = "block";
}
span.onclick = function() {
  mdl.style.display = "none";
}

span2.onclick = function() {
  mdl2.style.display = "none";
}

function showSignInModal(){
  mdl2.style.display = "flex";
}

function hideSignInModal(){
  mdl2.style.display = "none";
}

function showSignUpModal(){
  mdl.style.display = "flex";
}

function hideSignUpModal(){
  mdl.style.display = "none";
}

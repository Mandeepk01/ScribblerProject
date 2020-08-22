
var modal3 = document.getElementById("myModal3") ;
var createBtn = document.getElementById("Create-Post-Modal") ;
var span3 = document.getElementsByClassName("close")[2];

createBtn.onclick = function()
{
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

function showCreatePost(){
  modal3.style.display = "flex";
}

function hideCreatePostModal(){
  modal3.style.display = "none";
}

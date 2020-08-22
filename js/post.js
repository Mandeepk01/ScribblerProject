function EditSaveClicked()
{
    let editsave = document.getElementById("edit-save");
    let UpdateHeading = document.getElementById("blogTitleNew") ;
    let UpdateBody = document.getElementById("blogBody") ;
    if(editsave.textContent.includes('Edit'))
    {
        editsave.innerHTML = 'Save &#x1f4be;' ;
        UpdateHeading.setAttribute('contenteditable' , "true") ;
        UpdateBody.setAttribute('contenteditable' , 'true') ;
        UpdateHeading.style.border = '1px black solid' ;
        UpdateBody.style.border = '1px black solid' ;
    }
    else if(editsave.textContent.includes('Save'))
    {
        editsave.innerHTML = 'Edit <i style="font-size: 14px;font-weight: bolder;" class="fa fa-pencil-square-o" aria-hidden="true"></i>'
        UpdateHeading.setAttribute('contenteditable' , "false") ;
        UpdateBody.setAttribute('contenteditable' , 'false') ;
        UpdateHeading.style.border = '';
        UpdateBody.style.border = '' ;
    }

}
let likes = 0 ;
function incrementLikes()
{   likes = likes + 1 ;
    console.log(likes) ;
    let updateCount = document.getElementById('like-count-update') ;
   if(likes === 1)
   {
       updateCount.innerHTML = `${likes} person likes this` ;
   }
   else
   {
    updateCount.innerHTML =`${likes} people have like this !` ;
   }
}

function addComment(){
  var x = document.getElementById("txtCommentPost").addEventListener("onchange", function(){
    document.getElementById("txtCommentPost").innerHTML;
  });

  var x = document.getElementById("txtCommentPost").value;
  console.log(x);
  var pElement = '<p >'+ x + '</p>';
  var getDiv = document.getElementById('listAllComments');
  getDiv.innerHTML = pElement + getDiv.innerHTML;
}

function nameValidation() {
    var inputName = document.forms["containerForms"]["inputName"].value;
    var inputEmail = document.forms["containerForms"]["inputEmail"].value;
    var inputPhoneNumber = document.forms["containerForms"]["inputPhoneNumber"].value;
    var inputMessage = document.forms["containerForms"]["inputMessage"].value;
    if (inputName == "") {
      alert("Username Empty");
      return false;
    } else {
      alert("Done!");
      return false;
    }
    return false;
  }

  let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("imageslider");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}
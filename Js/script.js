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

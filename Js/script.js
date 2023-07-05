const inputName = document.getElementById ("inputName");
const inputEmail = document.getElementById ("inputEmail");
const inputPhoneNumber = document.getElementById ("inputPhoneNumber");
const inputMessage = document.getElementById ("inputMessage");
const submitButton = document.getElementById ("submitButton");

submitButton.addEventListener ("click", function(event)) {
    event.preventDefault()
    const inputNameValue = inputName.value
    const inputEmailValue = inputEmail.value
    const inputPhoneNumberValue = inputPhoneNumber.value
    const inputMessageValue = inputMessage.value
    nameValidation(inputEmailValue, inputEmailValue, inputPhoneNumberValue ,inputMessageValue)

}

function nameValidation (inputName, inputEmail, inputPhoneNumber, inputMessage){
    if (inputName == "") {
        alert ("Username Empty")
    } else {
        alert ("success")
    }
}

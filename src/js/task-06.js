const validInput = document.querySelector('#validation-input');


const dataValue = Number(validInput.dataset.length);


validInput.addEventListener("blur", changeClass);


function changeClass(event) {
    if (event.currentTarget.value.length === dataValue) {
    validInput.classList.add("valid");
    validInput.classList.remove("invalid");
} else  {
    validInput.classList.add("invalid");
    validInput.classList.remove("valid");
}
}

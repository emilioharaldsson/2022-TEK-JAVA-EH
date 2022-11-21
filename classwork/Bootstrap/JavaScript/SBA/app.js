let email = document.getElementById("email")
let password = document.getElementById("password")
let nameField = document.getElementById("nameField")
const btn = document.querySelector(".signupbtn")
const passwordConditions = document.querySelector(".passwordConditions")
const emailHelp = document.querySelector("#emailHelp")


function validateEmail (email) {
    return email.match(/^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2-8})?$/);
};


function validatePassword(password){
    return password.match(/^.*(?=.{8,20})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/)
}



function onSubmit(e){

    e.preventDefault();
    const emailVal = validateEmail(email.value);
    const passwordVal = validatePassword(password.value);
    let isEmailValidated = false;
    let isPasswordValidated = false;
    let isNameValid = false;
    if (!emailVal){
        emailHelp.innerHTML = "";
        emailHelp.innerText = "Invalid Email";
        emailHelp.classList.add("blood");
    } else {
        isEmailValidated = true;
    }

    if (!passwordVal){
        passwordConditions.innerHTML = "";
        passwordConditions.innerText = "C'mon Bro that's not what I told you. You need 8-20 letters, at least one number, and one special character!"
        passwordConditions.classList.add("blood");
        passwordConditions.classList.add("form-text")
    } else {
        isPasswordValidated = true;
    }

    if (nameField.value.length > 0 && nameField.value[0] !== " "){
        isNameValid = true;
    }

    if (isEmailValidated && isPasswordValidated && isNameValid){
        window.location.href='/success.html';
    }
}



btn.addEventListener('click', onSubmit);


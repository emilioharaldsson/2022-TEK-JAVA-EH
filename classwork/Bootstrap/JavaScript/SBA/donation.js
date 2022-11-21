let donationEmail = document.querySelector('#donationEmail');
let donationAmount = document.querySelector('#donationAmount'); 
let consent = document.getElementById('cb-consent');
const donationEmailMessage = document.querySelector('.emailValidationMessage');
const amountValidationMessage = document.querySelector('#donationAmountMessage');
const confirmationMessage = document.querySelector('.confirmationMessage')
const proceedToCheckOut = document.querySelector('.proceedToCheckOut');


function validateEmail (email) {
    return email.match(/^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2-8})?$/);
};



function doTheyConsent(checkbox){
    condition = true;
    if (!checkbox.checked){
        return false
    }
    return condition
}

function determineBrokeboi(amount){
    let condition = true;
    if (amount < 49){
        condition = false;
        return condition;
    }
    return condition;
}


function proceedToCheckOutValidation(e){
    e.preventDefault();
    const emailVal = validateEmail(donationEmail.value);
    const amountVal = determineBrokeboi(donationAmount.value);
    const consentVal = doTheyConsent(consent);
    let isEmailValid = false;
    let isAmountValid = false;
    let isConsented = false;
    if (!emailVal){
        donationEmailMessage.innerHTML = "";
        donationEmailMessage.innerText = "Invalid Email. You played yoself";
        donationEmailMessage.classList.add('form-text');
        donationEmailMessage.classList.add('blood');
    } else {
        isEmailValid = true;
    }

    if (!amountVal){
        amountValidationMessage.innerHTML = "";
        amountValidationMessage.innerText = "We said no brokebois. You better check yourself"
        amountValidationMessage.classList.add('form-text')
        amountValidationMessage.classList.add('blood');
    } else {
        isAmountValid = true;
    }
    if (!consentVal){
        confirmationMessage.innerHTML = "";
        confirmationMessage.innerText = "You gotta consent homie";
        confirmationMessage.classList.add('form-text');
        confirmationMessage.classList.add('blood');
    } else {
        isConsented = true;
    }

    if (isEmailValid && isAmountValid && isConsented){
        window.location.href='/successDonation.html';
    }

    
}




proceedToCheckOut.addEventListener('click', proceedToCheckOutValidation)

function onSubmit(e){
    e.preventDefault();
    const phoneNumber = document.querySelector("#exampleInputPhoneNumber").value;
    const messageContainer = document.querySelector('.message-container');
    const firstName = document.querySelector("#exampleInputFirstName").value;
    const lastName = document.querySelector("#exampleInputLastName").value;
    const formText = document.querySelector("#emailHelp")
    let phoneNumberArr = phoneNumber.split("");
    formText.innerHTML = ""
    for(let i = 0; i < phoneNumberArr.length; i ++){
        if (typeof phoneNumberArr[i] !== 'number' || phoneNumberArr[i] !== " " ){
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('form-text')
            errorMessage.classList.add('text-danger')
            errorMessage.innerText = "Incorrect Phone Number Format"
            messageContainer.append(errorMessage);
            break;
        }
        
    }
    if (firstName.length < 1 || lastName.length < 1){
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('form-text')
        errorMessage.classList.add('text-danger')
        errorMessage.innerText = "Incorrect Name Field"
        messageContainer.append(errorMessage);
  
    }

} 

const form = document.querySelector('.form-example');
form.addEventListener('submit', onSubmit)
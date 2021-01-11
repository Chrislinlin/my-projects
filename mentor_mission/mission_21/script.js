const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group error';
    const small = formGroup.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input){
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
}

// Check email is valid
function isValidEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Check input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Check passwords match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}



// Eventlistener
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     if(username.value === '') {
//         showError(username, 'Username is required');
//     } else {
//         showSuccess(username);
//     }

//     if(inpit === '') {
//         showError(email, 'Email is required');
//     }else if(!isValidEmail(email.value)){
//         showError(email, 'Email is not valid');
//     } else {
//         showSuccess(email);
//     }

//     if(password.value === '') {
//         showError(password, 'Password is required');
//     } else {
//         showSuccess(password);
//     }

//     if(password2.value === '') {
//         showError(password2, 'Password2 is required');
//     } else {
//         showSuccess(password2);
//     }

//     checkRequired([username, email, password, password2]);
//     checkLength(username, 3, 15);
//     checkLength(password, 8, 16);
//     isValidEmail(email);
    

// }) 
form.addEventListener('keyup',function(e){
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 16);
    isValidEmail(email);
    if(!checkRequired([password, password2])){
    checkLength(password, 8, 16);
    checkPasswordMatch(password, password2);
    }
})

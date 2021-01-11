const form = $('#form');
const username = $('#username');
const email = $('#email');
const password = $('#password');
const password2 = $('#password2');

//show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = $('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// Check email is valid
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//event listenter
form.submit(function(e){
    e.preventDefault;
    // console.log(123)
    if(username.val() === ''){
        
        showError(username , "Username is required")
    }else{
        showSuccess(username);
    }

    if(email.val() ===''){
        showError(email, "Email is valid")
    }else if(!isValidEmail(email.value)){
        showError(email, 'Email is not valid');
    }else{
        showSuccess(email)
    }

    if(password.val() === ''){
        showError(password, "Password is required")
    }else{
        showSuccess(password);
    }

    if(password2.val() === ''){
        showError(password, "Password2 is required")
    }else{
        showSuccess(password);
    }
})
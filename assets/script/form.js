// get value for toggle
let logIn = document.querySelector("#login");
let signUp = document.querySelector("#signup");
let butnToggle = document.querySelector("#butn-div");

//function for toggle
function signup() {
  logIn.style.left = "-400px";
  signUp.style.left = "50px";
  butnToggle.style.left = "110px";
}

function login() {
  logIn.style.left = "50px";
  signUp.style.left = "-450px";
  butnToggle.style.left = "0px";

}

// form validation
// signup validation
// Name Validation
function fullnameFocus(){
  let fullName = document.querySelector("#full-name");

  if (fullName.value == null || fullName.value == "") {
    let nameData = document.querySelector("#name-data");
    nameData.innerText = "! please enter your field";
  }
}


function fullnameKeyup(){
  let checkName = "/[a-zA-Z]/g";
   let fullName = document.querySelector("#full-name");
  
  if (!fullName.value.match(checkName) ) {
    let nameData = document.querySelector("#name-data");
    nameData.innerText = "!Names only include letter";
  }
  
}

function fullnameBlur(){
  let fullName = document.querySelector("#full-name");
  if ( fullName.value != null ) {
    console.log("blur")
    let nameData = document.querySelector("#name-data");
    nameData.innerText = "";
}
}

// Email Validation

function emailFocus(){
  let email = document.querySelector("#signUp-email");
  if (email.value.length == "") {
    let emailData = document.querySelector("#email-data");
    emailData.innerHTML = "! please input this field";
}
}

function emailKeyup(){
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let email = document.querySelector("#signUp-email");
  if (!email.value.match(mailformat) ) {
    let emailData = document.querySelector("#email-data");
    emailData.innerHTML = "!@ is missing.@ must include ";
  }
  
}

function emailBlur(){
  let email = document.querySelector("#signUp-email");
  if (email.value.length != "") {
    let emailData = document.querySelector("#email-data");
    emailData.innerHTML = "";
}
}

//Password Validation

function passwordFocus(){
  let password = document.querySelector("#signUp-password");
  if (password.value.length == "") {
        let passwordData = document.querySelector("#paswd-data");
        passwordData.innerText = "! please input this field";
       }
}

function passwordKeyup(){
  let password = document.querySelector("#signUp-password");
  if (password.value.length < 8) {
        let passwordData = document.querySelector("#paswd-data");
        passwordData.innerText = "! pswd atleast 8 Characters long";
  }
}

function passwordBlur(){
  let password = document.querySelector("#signUp-password");
   if (password.value.length > 8) {
      let passwordData = document.querySelector("#paswd-data");
      passwordData.innerText = "";
   }
}

// Validation for Confirm Password

function confirmPasswordFocus(){
  let confirmPassword = document.querySelector("#confirm-password");
  if (confirmPassword.value.length == "") {
        let confirmPasswordData = document.querySelector("#confirmPaswd-data");
        confirmPasswordData.innerText = "!please input this field";
        
   }
}

function confirmPasswordKeyup(){
  let password = document.querySelector("#signUp-password");
  let confirmPassword = document.querySelector("#confirm-password");
  if (confirmPassword.value != password.value) {
        let confirmPasswordData = document.querySelector("#confirmPaswd-data");
        confirmPasswordData.innerText = "!pasword not match";
  }
}

function confirmPasswordBlur(){
  let password = document.querySelector("#signUp-password");
  let confirmPassword = document.querySelector("#confirm-password");
  if (confirmPassword.value == password.value) {
        let confirmPasswordData = document.querySelector("#confirmPaswd-data");
        confirmPasswordData.innerText = "";    
    }
}

function signUpButton(){
  let input = document.querySelector(".signup-input");
  if(input.value.length !== "" ){
    let signupBtn = document.querySelector("#signup-btn");
    // signupBtn.window.location = login();
    // signupBtn.innerHTML = window.open(login()); 
    signupBtn.innerHTML=window.location.assign(login());

  }
  else{
    console.log("error")
  }
}



// login validation

let myEmail = "teamdenali4@gmail.com";
let myPassword = "TEAMdenali1234";

// Email Validation
function loginEmailfocus(){
  let loginEmail = document.querySelector("#login-email");
  if (loginEmail.value.length == "") {
    let loginEmaildata = document.querySelector("#loginemail-data");
    loginEmaildata.innerHTML = "! please input this field";
  }
}

function loginEmailkeyup(){
  let loginEmail = document.querySelector("#login-email");
  if (loginEmail.value != myEmail) {
    let loginEmaildata = document.querySelector("#loginemail-data");
    loginEmaildata.innerHTML = "! Incorrect Email";
  }
}

function loginEmailblur(){
  let loginEmail = document.querySelector("#login-email");
  if (loginEmail.value == myEmail) {
    let loginEmaildata = document.querySelector("#loginemail-data");
    loginEmaildata.innerHTML = "";
  }
}

//passwd validation

function loginPasswordfocus(){
  let loginPassword = document.querySelector("#login-paswd");
  if (loginPassword.value.length == "") {
      let loginPasswordData = document.querySelector("#loginpaswd-data");
      loginPasswordData.innerHTML = "! please input this field";
    }
}

function loginPasswordkeyup(){
  let loginPassword = document.querySelector("#login-paswd");
  if (loginPassword.value != myPassword) {
    let loginPasswordData = document.querySelector("#loginpaswd-data");
    loginPasswordData.innerHTML = "!Incorect answer";
  }
}  


function loginPasswordblur(){
  let loginPassword = document.querySelector("#login-paswd");
  if (loginPassword.value == myPassword) {
    let loginPasswordData = document.querySelector("#loginpaswd-data");
      loginPasswordData.innerHTML = "";
  }
}


function loginButton() {
  let btn = document.querySelector("#login-btn");
  btn.innerHTML=window.location.assign('welcome.html');

}



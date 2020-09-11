let logIn = document.querySelector("#login");
let signUp = document.querySelector("#signup");
let butnToggle = document.querySelector("#butn-div");

function signup() {
  logIn.style.left = "-400px";
  signUp.style.left = "50px";
  butnToggle.style.left = "110px";
  // butnToggle.style.color = " #EEE5E9";
  // signUp.style.color = "#EEE5E9";
  // let toggleLogin = document.querySelector("#toggle-login");
  // toggleLogin.style.color = "#EEE5E9";
}

function login() {
  logIn.style.left = "50px";
  signUp.style.left = "-450px";
  butnToggle.style.left = "0px";
  // logIn.style.color = "#EEE5E9";

}

// Form Validation 

function signupButton() {
  let fullName = document.querySelector("#full-name").value;
  let email = document.querySelector("#signUp-email");
  let password = document.querySelector("#signUp-password");
  let confirmPassword = document.querySelector("#confirm-password").value;
  // let checkName = fullName.search("/[a-zA-Z]/g");
  // let checkEmail = /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@ [A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$`;
  const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/;

  if (fullName == null || fullName == "") {
    let nameData = document.querySelector("#name-data");
    nameData.innerText = "! please input this field";
    nameData.style.color = "#CC2936";
    nameData.style.fontStyle = "italic";
    let emailIcon = document.querySelector(".signup-email");
    emailIcon.style.top = "80px";
    let paswdIcon = document.querySelector(".signup-pswd");
    paswdIcon.style.top = "128px";
    let confirmPaswdIcon = document.querySelector(".confirm-pswd");
    confirmPaswdIcon.style.top = "174px";
    return false;
  }
  // else if (fullName != checkName){ 
  //   let nameData = document.querySelector("#name-data");
  //   nameData.innerText = "! Only contains alphanumeric characters, underscore and dot";
  //   nameData.style.color = "#CC2936"; 
  //   nameData.style.fontStyle = "italic";
  //   let emailIcon = document.querySelector(".signup-email");
  //   emailIcon.style.top = "100px";
  //   let paswdIcon = document.querySelector(".signup-pswd");
  //   paswdIcon.style.top = "143px";
  //   let confirmPaswdIcon = document.querySelector(".confirm-pswd");
  //   confirmPaswdIcon.style.top = "190px";
  //   return false;  
  // }
  else if (email.value.length == "") {
    let emailData = document.querySelector("#email-data");
    emailData.innerHTML = "! please input this field";
    emailData.style.color = "#CC2936";
    emailData.style.fontStyle = "italic";
    console.log(emailData);
    let paswdIcon = document.querySelector(".signup-pswd");
    paswdIcon.style.top = "128px";
    let confirmPaswdIcon = document.querySelector(".confirm-pswd");
    confirmPaswdIcon.style.top = "175px";
    return false;
  }
  else if(email.value.match(illegalChars)){
    let emailData = document.querySelector("#email-data");
    emailData.innerHTML = "! please enter valid email address";
    emailData.style.color = "#CC2936";
    emailData.style.fontStyle = "italic";
    console.log(emailData);
    let paswdIcon = document.querySelector(".signup-pswd");
    paswdIcon.style.top = "128px";
    let confirmPaswdIcon = document.querySelector(".confirm-pswd");
    confirmPaswdIcon.style.top = "175px";
    return false;
  }
  else if (password.value.length == "") {
    let passwordData = document.querySelector("#paswd-data");
    passwordData.innerText = "! please input this field";
    passwordData.style.color = "#CC2936";
    passwordData.style.fontStyle = "italic";
    let confirmPaswdIcon = document.querySelector(".confirm-pswd");
    confirmPaswdIcon.style.top = "178px"; 
    return false;
  }
  else if (password.value.length >= 8) {
    let passwordData = document.querySelector("#paswd-data");
    passwordData.innerText = "! pswd atleast 8 Characters long";
    passwordData.style.color = "#CC2936";
    passwordData.style.fontStyle = "italic";
    let confirmPaswdIcon = document.querySelector(".confirm-pswd");
    confirmPaswdIcon.style.top = "178px"; 
    return false;
  }
  else if (password != confirmPassword) {
    let confirmPasswordData = document.querySelector("#confirmPaswd-data");
    confirmPasswordData.innerText = "!pasword not match";
    confirmPasswordData.style.color = "#CC2936";
    confirmPasswordData.style.fontStyle = "italic";
    return false;
  }
  
  // get button 
  else{
    let signupBtn = document.querySelector("#signup-btn");
  signupBtn.window.onload = login();
  } 
}


// login validation

let myEmail = "teamdenali4@gmail.com";
let myPassword = "TEAMdenali1234";

function loginButton() {
  let loginEmail = document.querySelector("#login-email");
  let loginPassword = document.querySelector("#login-paswd");

  

  if (loginEmail.value.length == "") {
    let loginEmaildata = document.querySelector("#loginemail-data");
    loginEmaildata.innerHTML = "! please input this field";
    loginEmaildata.style.color = "#CC2936";
    loginEmaildata.style.fontStyle = "italic";
    let loginPaswdIcon = document.querySelector(".input-pswd");
    loginPaswdIcon.style.top = "100px";
    return false
  }
  else if (loginEmail.value == myEmail) {
    console.log("correct email");
    return false
  }
  else if (loginEmail.value != myEmail) {
    let loginEmaildata = document.querySelector("#loginemail-data");
    loginEmaildata.innerHTML = "! Incorrect Email";
    loginEmaildata.style.color = "#CC2936";
    loginEmaildata.style.fontStyle = "italic";
    return false;
  }

  else if (loginPassword.value.length == "") {
    let loginPasswordData = document.querySelector("#loginpaswd-data");
    loginPasswordData.innerHTML = "! please input this field";
    loginPasswordData.style.color = "#CC2936";
    loginPasswordData.style.fontStyle = "italic";
    return false;
  }
  else if (loginPassword.value != myPassword) {
    let loginPasswordData = document.querySelector("#loginpaswd-data");
    loginPasswordData.innerHTML = "! Incorrect password";
    loginPasswordData.style.color = "#CC2936";
    loginPasswordData.style.fontStyle = "italic";
    return false;
  }
  else if (loginPassword.value == myPassword) {
    console.log("Correct password");
    let loginButton = document.querySelector("#login-btn");
    loginButton.innerHTML = window.open("welcome.html");
    return false;
  }  
  // else if(loginEmail.value == myEmail && loginPassword.value == myPassword){
  //   let loginButton = document.querySelector("#login-btn");
  //   loginButton.innerHTML = window.location.replace("welcome.html");
  // }
    return true;

  }

import { siteLogin } from "../components/site-login.js";
import { siteRegister } from "../components/site-register.js";

loadLogin();

function loadLogin(){
    removeElements()
    let newHeaderDiv = document.createElement('div');
    newHeaderDiv.innerHTML = siteLogin();
    document.getElementById("login-register-main-container").appendChild(newHeaderDiv);

    document.getElementById('point-login').addEventListener('click', loadLogin);
    document.getElementById('point-register').addEventListener('click', loadRegister);
}

function loadRegister(){
    removeElements();
    let newHeaderDiv = document.createElement('div');
    newHeaderDiv.innerHTML = siteRegister();
    document.getElementById("login-register-main-container").appendChild(newHeaderDiv);

    document.getElementById('point-login').addEventListener('click', loadLogin);
    document.getElementById('point-register').addEventListener('click', loadRegister);


    let nameRegister = document.getElementById("name-input");
    let nameError = document.getElementById("name-error");

    let emailRegister = document.getElementById("email-input");
    let emailError = document.getElementById("email-error");

    let passRegister = document.getElementById("pass-input");
    let passError = document.getElementById("pass-error");

    let registerBtn = document.getElementById("register-btn");

    registerBtn.addEventListener('click', async(e) =>{
        let name_input = nameRegister.value;
        let email_input = emailRegister.value;
        let pass_input = passRegister.value;
    
        e.preventDefault();
        
        const registerData = {
            userName : name_input,
            userEmail : email_input,
            userPass : pass_input,
            loggedIn : true
        };
    
        fetch("http://localhost:8080/user/register", {
            method:"POST",
            body: JSON.stringify(registerData),
            mode: 'no-cors',
            headers:{
                "Content-Type":"application/json; charset=UTF-8"
            },
        })
        .then((res) => {
            res.json().then((r) =>{
                if(r.message == "Please enter name"){
                    nameError.style.visibility = "visible";
                    nameError.innerText = "Please enter name";
                }
                else if(r.message == "Please enter full name"){
                    nameError.style.visibility = "visible";
                    nameError.innerText = "Please enter full name";
                }
                else if(r.message == "Please enter email"){
                    emailError.style.visibility = "visible";
                    emailError.innerText = "Please enter email";
                }
                else if(r.message == "Email already registered"){
                    emailError.style.visibility = "visible";
                    emailError.innerText = "Email already registered";
                }
                else if(r.message == "Please enter password"){
                    passError.style.visibility = "visible";
                    passError.innerText = "Please enter password";
                }
                else if(r.message == "Password should be more that 4 characters"){
                    passError.style.visibility = "visible";
                    passError.innerText = "Password should be more that 4 characters";
                }
            })
            console.log(res);
            // window.location.href = 'home.html';
        })
    })
}

function removeElements() {
    var myDiv = document.getElementById('login-register-main-container');

    while (myDiv.firstChild) {
        myDiv.removeChild(myDiv.firstChild);
    }
}
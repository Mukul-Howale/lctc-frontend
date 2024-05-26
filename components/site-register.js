function siteRegister(){
    return `
    <div class="login-register-container">
    <p></p>
    <div class="name-contaier cont">
        <p class="login-text">Name</p>
        <input type="text" id="name-input">
        <p id="name-error">ok</p>
    </div>
    <div class="email-container cont">
        <p class="login-text">Email</p>
        <input type="email" id="email-input">
        <p id="email-error">ok</p>
    </div>
    <div class="password-container cont">
        <p class="login-text">Password</p>
        <input type="password" id="pass-input">
        <p id="pass-error">ok</p>
    </div>
    <div class="login-register-btn" id="register-btn">
        <p class="login-text">Register</p>
    </div>
    <h4><span id="point-register">Register</span> - <span id="point-login">Login</span></h4>
</div>
    `
}

export {siteRegister};
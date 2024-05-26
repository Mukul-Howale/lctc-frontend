function siteLogin(){
    return `
    <div class="login-register-container">
    <p></p>
    <div class="email-container cont">
        <p class="login-text">Email</p>
        <input type="email" id="email-login-input">
        <p id="email-login-error">ok</p>
    </div>
    <div class="password-container cont">
        <p class="login-text">Password</p>
        <input type="password" id="pass-login-imput">
        <div class="error-forgot-pass">
            <p id="pass-login-error">ok</p>
            <h5>Forgot Password</h5>
        </div>
    </div>
    <div class="login-register-btn" id="login-btn">
        <p class="login-text">Login</p>
    </div>
    <h4><span id="point-register">Register</span> - <span id="point-login">Login</span></h4>
</div>
    `
}

export {siteLogin};
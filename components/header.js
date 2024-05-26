function header() {
    return `
    <div class="header">
    <div class="icon-title-container">
        <div class="icon-container">
            <img src="../images/LCTC--fotor-20231129172714.svg" alt="">
        </div>
        <div class="title-container remove-text-deco">
            <h3 id="update-title"><a href="../html/home.html">Limited Capital Trading Challenge</a></h3>
        </div>
    </div>
    <div id="dynamic-menu" class="menu-container">
        <div class="home-btn-container remove-text-deco">
            <h3><a href="../html/home.html">Home</a></h3>
        </div>
        <div class="hallOfFame-btn-container remove-text-deco">
            <h3><a href="../html/halloffame.html">Hall Of Fame</a></h3>
        </div>
        <div class="faq-btn-container remove-text-deco">
            <h3><a href="../html/faq.html">FAQ</a></h3>
        </div>
        <div class="login-btn-container remove-text-deco">
            <h3><a href="../html/login-register.html">Login</a></h3>
        </div>
        <div class="dashboard-btn-container remove-text-deco">
            <h3><a href="../html/dashboard.html">Dashboard</a></h3>
        </div>
    </div>
</div>
    `
}

export {header};
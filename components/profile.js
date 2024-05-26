function profile() {
    return `
    <div class="profile-details-container">
                    <div class="name-container text-container">
                        <p>Name</p>
                        <input type="text" class="readOnlyInput">
                    </div>
                    <div class="email-container text-container">
                        <p>Email</p>
                        <input type="email" class="readOnlyInput">
                    </div>
                    <div class="password-container text-container">
                        <p>Password</p>
                        <input type="password" class="readOnlyInput">
                    </div>
                </div>
    `
}

export {profile};
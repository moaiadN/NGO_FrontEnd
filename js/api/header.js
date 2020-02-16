function renderHeader(containerId, isUserLoggedIn) {
    let html = `
            <ul>
            <li><a href="./index.html" class="active"> home </a></li>
            ${isUserLoggedIn
                ? '':
                `<div class="regLogin" id="regLogin">
                    <a href="./register.html"> Sign up </a> |
                    <a href="./login.html"> login </a>
                </div>`}
            ${isUserLoggedIn ? ` 
            <li><a href="./trainee-profile.html"> profile </a></li>
            </ul>
            <div class="logout" id="logout"><a href="./index.html"> logout </a></div>` : ''}
    `;

    document.getElementById(containerId).innerHTML = html;
    
    if (isUserLoggedIn) {
        document.getElementById('logout').addEventListener('click', function logout(){
            console.log(localStorage.getItem('token'));
            localStorage.removeItem('token');
            console.log(localStorage.getItem('token'));
            window.location.origin;
        });
    }
}

export {
    renderHeader
};
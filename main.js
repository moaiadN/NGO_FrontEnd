//  ==================== Show / Hide aside Menu ====================
let showMenu = true;
function toggleMenu() {
    var menuList = document.getElementById("menu-list");
    if (showMenu) {
        menuList.style.display = "block"
    } else {
        menuList.style.display = "none"
    }
    showMenu = !showMenu;
}
//  ==================== Show / Hide Password ====================
document.getElementById("passField").addEventListener("input", () => {

    document.getElementById('show-hide').style.display = "block";
});

function togglePass() {
    var showPass = document.getElementById("passField");
    if (showPass.type === "password") {
        showPass.type = "text";
        document.getElementById('show-hide').src = './images/visibility.svg';
    } else {
        showPass.type = "password";
        document.getElementById('show-hide').src = './images/visibility_off.svg';
    }
}

//  ====================== Form Validation ==========================
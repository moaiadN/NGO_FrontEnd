let pass = document.getElementById("inp");
let email = document.getElementById("ine");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let pas = /[pass.length>=8]+[0-9]/;
let ema = /[a-z0-9]+\@+[a-z]+\.+[a-z]/;


function login() {
    if (ema.test(email.value) === false) {
        p1.innerHTML = "Enter correctly Email";
        email.style.borderBottomColor = "red";
    } else {
        p1.innerHTML = "";
        email.style.borderBottomColor = "green";
    }
    // ==================================================
    if (pas.test(pass.value) === false) {
        p2.innerHTML = "Enter correctly password";
        pass.style.borderBottomColor = "red";
    } else {
        p2.innerHTML = "";
        pass.style.borderBottomColor = "green";
    }
}
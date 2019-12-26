let name = document.getElementById("iny");
let email = document.getElementById("ine");
let Address = document.getElementById("iny1");
let mob = document.getElementById("num");
let pass = document.getElementById("inp");

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let nam = /[a-z]+ +[a-z]/i;
let ema = /[a-z0-9]+\@+[a-z]+\.+[a-z]/;
let Addre = /[a-z]+ +[a-z]/i;
let mo = /[mob.length>8]+[0-9]/;
let pas = /[pass.length>6]+[0-9]/;

function sign() {
    if (nam.test(name.value) === false) {
        p1.innerHTML = "Enter correctly  name ";
        name.style.borderBottomColor = "red";
    } else {
        p1.innerHTML = "";
        name.style.borderBottomColor = "green";
    }
    //=====================================================================================
    if (ema.test(email.value) === false) {
        p2.innerHTML = "Enter correctly Email";
        email.style.borderBottomColor = "red";
    } else {
        p2.innerHTML = "";
        email.style.borderBottomColor = "green";
    }


    if (Addre.test(Address.value) === false) {
        p3.innerHTML = "Enter correctly Addres ";
        Address.style.borderBottomColor = "red";
    } else {
        p3.innerHTML = "";
        Address.style.borderBottomColor = "green";
    }


    if (mo.test(mob.value) === false) {
        p4.innerHTML = "Enter correctly Mobile ";
        mob.style.borderBottomColor = "red";
    } else {
        p4.innerHTML = "";
        mob.style.borderBottomColor = "green";
    }


    if (pas.test(pass.value) === false) {
        p5.innerHTML = "Enter correctly password";
        pass.style.borderBottomColor = "red";
    } else {
        p5.innerHTML = "";
        pass.style.borderBottomColor = "green";
    }
}
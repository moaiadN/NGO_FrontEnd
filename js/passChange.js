//  ================= Nav ===============
import { renderHeader } from "./api/header.js";
let token = null;
token = localStorage.getItem('token');
renderHeader('list', token !== null);
// =============================================
const form = document.getElementById('form');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const oldPassword = document.getElementById('oldPassword');
form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});
function checkInputs() {
	const passwordValue = password.value;
	const password2Value = password2.value;
	const oldPasswordValue = oldPassword.value;
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
	if(oldPasswordValue === '') {
		setErrorFor(oldPassword, 'old Password cannot be blank');
	} else{
		setSuccessFor(oldPassword);
	}
}
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

//  ==================== Show / Hide aside Menu ====================
let showMenu = true;
document.getElementById('showMenu').addEventListener('click', function toggleMenu() {
    var menuList = document.getElementById("menu-list");
    if (showMenu) {
        menuList.style.display = "block"
    } else {
        menuList.style.display = "none"
    }
    showMenu = !showMenu;
});
//  ==================== Show / Hide Password ====================
document.getElementById("password").addEventListener("input", () => {
    document.getElementById('show-hide').style.display = "block";
});
document.getElementById("show-hide").addEventListener("click",function togglePass() {
    var showPass = document.getElementById("password");
    if (showPass.type === "password") {
        showPass.type = "text";
        document.getElementById('show-hide').src = './images/visibility.svg';
    } else {
        showPass.type = "password";
        document.getElementById('show-hide').src = './images/visibility_off.svg';
    }
});
// ============================================


document.getElementById("save").addEventListener("click",e=>{
let p1=document.getElementById("oldPassword").value
let p2=document.getElementById("password2").value

fetch("http://localhost:3000/trainee/EditePasswordTrainee/",{
	method:"PUT",
	headers:{
		"Content-Type":"Application/json",
		"authorization":"b "+localStorage.getItem("token")
	},
	body:JSON.stringify({old_password:p1,new_password:p2})
}).then(re=>re.json()).then(data=>{
	if(data.status===404){
let p1=document.getElementById("oldPassword").style.border="2px solid red"
let p2=document.getElementById("password2").style.border="2px solid red"
let p22=document.getElementById("password").style.border="2px solid red"

	}else{
		window.location.href="./trainee-profile.html"
	}
})

})



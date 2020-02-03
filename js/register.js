//  ================= Nav ===============
import { renderHeader } from "./api/header.js";
let token = null;
token = localStorage.getItem('token');
renderHeader('list', token !== null);
// =============================================
const form = document.getElementById('form');
const username = document.getElementById('username');
const Address = document.getElementById('Address');
const mobile = document.getElementById('mobile')
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});
function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const AddressValue = Address.value.trim();
	const mobileValue = mobile.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	if(AddressValue === '') {
		setErrorFor(Address, 'Address cannot be blank');
	} else {
		setSuccessFor(Address);
	}
	if(mobileValue === '') {
		setErrorFor(mobile, 'mobile cannot be blank');
	} else {
		setSuccessFor(mobile);
	}
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
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
function isEmail(email) {
	return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
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
//  ================= Nav ===============
import { renderHeader } from "./api/header.js";
let token = null;
token = localStorage.getItem('token');
renderHeader('list', token !== null);
// =============================================
import { login } from './api/trainee.js';

const email = document.getElementById('email');
const password = document.getElementById('password');
form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
	loginn();
});
function checkInputs() {
	// trim to remove the white spaces
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	if (emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!emailValue) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	if (passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
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
}
// ============================================
function loginn() {
	var email = document.getElementById('email').value;
	var password = document.getElementById("password").value;
	fetch("http://localhost:3000/trainee/loginTrainee",{
		method:"POST",
		headers:{
			"Content-Type":"Application/json",
		},
		body:JSON.stringify({email:email,password:password})
	}).then(re=>re.json()).then(data=>{
		if(data.status==400){
			var email = document.getElementById('email').style.border="2px solid red";
			var password = document.getElementById("password").style.border="2px solid red";
		}else{
			console.log(data);
			localStorage.setItem("token",data.token);
			localStorage.setItem("id",data.id);
			window.location = "../trainee-profile.html?id="+data.id;
		}

	})



	// let token = 'klfshdklsfhkdshsfjslkjhjfkdsjfkljldfjsfj';
	// localStorage.setItem('token', token);
	// // var regLogin = ;
	// // var logout = ;
	// if (email === "asd@as.aa" && password === "123") {
	// 	document.getElementById('regLogin').style.display= 'none';
	// 	window.location.href = "./index.html";
	// 	document.getElementById('logout').style.display= 'block';
		
	// } 
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
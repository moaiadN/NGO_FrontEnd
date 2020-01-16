import { getAllCourses } from './api/course.js';
// import { getCourseAbout  } from './api/courseInfo.js';

let page = 1;

getAllCourses(page, pageSize, courses => {

    renderCourses(courses);
});

//  ====================== Get All Courses -Home- ==========================

function renderCourses(courses) {
    let html = '';
    for (let i in courses) {
        html += `
                    <div class="course-info">
                    <div class="image">
                        <img src="${courses[i].photo}" alt="">
                    </div>
                    <hr>
                    <div class="content">
                        <h3>${courses[i].courseTitle}</h3>
                        <label>Trainer :<a href="./trainer.html"> ${courses[i].trainerName} </a></label>
                        <p><b>Hypertext Markup Language (HTML)</b> is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. </p>
                        <span><a href="./about_course.html">Read More</a></span>
                    </div>
                    </div>
                `;
    }
    document.getElementById('courseContent').innerHTML = html;
}
//  ======================  Course page ==========================

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
/*
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
*/
//  ====================== Form Validation ==========================
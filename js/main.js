import { getAllCourses } from './api/course.js';
// import { search  } from './api/search';

let page = 1;
let courses = [];
let pageSize = 6;

getAllCourses(page, pageSize, result => {
    courses = result;
    renderCourses(courses);
});

 document.getElementById('show').addEventListener('click' , function(event){
     event.preventDefault();
     
    page++;
    console.log(page);
    getAllCourses(page, pageSize, result => {
        courses = courses.concat(result);
        console.log(courses);
        renderCourses(courses);
    });
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
//  ==================== Search Box ====================
document.getElementById('searchButton').addEventListener('click', function searchBox() {
    var input, courses, courseInfo, filter, h3, label, i, txtValue, txtValue1;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    courses = document.getElementById("courseContent");
    courseInfo = courses.getElementsByClassName("course-info");
    for (i = 0; i < courseInfo.length; i++) {
        h3 = courseInfo[i].getElementsByTagName("h3")[0];
        label = courseInfo[i].getElementsByTagName("label")[0];
        txtValue = h3.textContent || h3.innerText;
        txtValue1 = label.textContent || label.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1) {
            courseInfo[i].style.display = "";
        } else {
            courseInfo[i].style.display = "none";
        }
    }
    input.value = "";
});
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
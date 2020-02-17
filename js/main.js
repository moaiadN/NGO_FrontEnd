//  ================= Nav ===============
import { renderHeader } from "./api/header.js";
let token = null;
token = localStorage.getItem('token');
renderHeader('list', token !== null);

//  ==================== Search Box ====================
// document.getElementById('searchButton').addEventListener('click', searchBox());
function searchBox() {
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
}
//  ==================== Show / Hide aside Menu ====================
// let showMenu = true;
// document.getElementById('showMenu').addEventListener('click', function toggleMenu() {
//     var menuList = document.getElementById("menu-list");
//     if (showMenu) {
//         menuList.style.display = "block"
//     } else {
//         menuList.style.display = "none"
//     }
//     showMenu = !showMenu;
// });
//  ==================== Show / Hide Password ====================

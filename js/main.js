//  ================= Nav ===============
import {
    renderHeader
} from "./api/header.js";
let token = null;
token = localStorage.getItem('token');
renderHeader('list', token !== null);

//  ==================== Search Box ====================
document.getElementById('searchButton').addEventListener('click', searchBox);
function searchBox() {
    let input = document.getElementById("searchInput").value;
    if(input ===""){
    }else {
    fetch('http://localhost:3000/courses/title/' + input, {
        method: 'get'
    }).then(re => {
        return re.json()
    }).then(courses => {
        if(courses.length>0){
            console.log(courses)
            let html = '';
            for (let i in courses) {
                html += `
                            <div class="course-info">
                            <div  class="content">
                                <h3>${courses[i].title}</h3>
                                <label>Trainer :<a href="./trainer.html?id=${courses[i].id}"> ${courses[i].name} </a></label>
                                <p>${courses[i].description} </p>
                                <button id='${courses[i].id}' class="readmore" >Read More</button>
                            </div>
                            </div>
                        `;
            }
            document.getElementById('courseContent').innerHTML = html;
            let more = document.getElementsByClassName("readmore");
            console.log(more);
            for (let i = 0; i < more.length; i++) {
                more[i].addEventListener("click", e => {
                    let id = e.target.id;
                    window.location = "about_course.html?id=" + id;
                    console.log(id);
                })
            }
        }else{
            let search_result=`<div class="result">No Result</div>`
            document.getElementById("courseContent").innerHTML = search_result;
        }
   
    })
    }

    // var input, courses, courseInfo, filter, h3, label, i, txtValue, txtValue1;
    // input = document.getElementById("searchInput");
    // filter = input.value.toUpperCase();
    // courses = document.getElementById("courseContent");
    // courseInfo = courses.getElementsByClassName("course-info");
    // for (i = 0; i < courseInfo.length; i++) {
    //     h3 = courseInfo[i].getElementsByTagName("h3")[0];
    //     label = courseInfo[i].getElementsByTagName("label")[0];
    //     txtValue = h3.textContent || h3.innerText;
    //     txtValue1 = label.textContent || label.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1) {
    //         courseInfo[i].style.display = "";
    //     } else {
    //         courseInfo[i].style.display = "none";
    //     }
    // }
    input = "";
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

// document.getElementById('logout').addEventListener('click', logout);
// function logout() {
//     // alert('hi');
//     localStorage.removeItem('token');
//     localStorage.removeItem("id");
//     window.location = '../index.html'
// }
//  ==================== Show / Hide Password ====================
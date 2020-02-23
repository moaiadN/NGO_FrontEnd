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
    let input = document.getElementById("searchInput");
    let title = document.getElementById("title");
    if(input.value === ""){

    }else if(!input.value){
        alert('hello');
    }else{
    fetch('http://localhost:3000/courses/title/' + input.value, {
        method: 'get'
    }).then(re => {
        return re.json()
    }).then(courses => {
        // console.log(courses)
        let html = '';
        for (let i in courses) {
            html += `
                        <div class="course-info">
                        <div  class="content">
                            <h3 id="title">${courses[i].title}</h3>
                            <label>Trainer :<a href="./trainer.html?id=${courses[i].id}"> ${courses[i].name} </a></label>
                            <p>${courses[i].description} </p>
                            <button id='${courses[i].id}' class="readmore" >Read More</button>
                        </div>
                        </div>
                    `;
        }
        document.getElementById('courseContent').innerHTML = html;
        let more = document.getElementsByClassName("readmore");
        // console.log(more);
        for (let i = 0; i < more.length; i++) {
            more[i].addEventListener("click", e => {
                let id = e.target.id;
                window.location = "about_course.html?id=" + id;
                console.log(id);
            })
        }
    })
}
    input.value = "";
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
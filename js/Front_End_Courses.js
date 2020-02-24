//  ================= Nav ===============
import { renderHeader } from "./api/header.js";

let token = null;
token = localStorage.getItem('token');
renderHeader('list', token !== null);
// =======================================

let id = localStorage.getItem('id');
console.log(id)



fetch('http://localhost:3000/courses/trainee/'+id ,{
    method : 'get'
}).then(res=>res.json()).then(courses=>{
    let html = '';
    console.log(courses)
    for (let i in courses) {
        html += `
                    <div class="course-info">
                    <div  class="content">
                        <h3>${courses[i].title}</h3>
                        <label>Trainer :<a href="./trainer.html?id=${courses[i].trainer}"> ${courses[i].name} </a></label>
                        <p>${courses[i].description} </p>
                        <button id='${courses[i].id}' id_c=${courses[i].hamza} class="readmore" >Read More</button>
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
            let id_c = e.target.getAttribute("id_c");
            localStorage.setItem("id_c",id_c)
        })
    }
})






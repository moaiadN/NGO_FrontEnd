import { getAllCourses } from './api/course.js';
// import { search  } from './api/search';

let page = 1;
let courses = [];
// let pageSize = 6;


getAllCourses( page,result => {
    courses = result;
    renderCourses(courses);
});

 document.getElementById('show').addEventListener('click' , function(event){
     event.preventDefault();
     
    page++;
    console.log(page);
    getAllCourses(page, result => {
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
                    
                    <div  class="content">
                        <h3>${courses[i].title}</h3>
                        <label>Trainer :<a href="./trainer.html?id=${courses[i].trainer}"> ${courses[i].name} </a></label>
                        <p>${courses[i].description} </p>
                        <span ><a id='${courses[i].id}' class="readmore" >Read More</a></span>
                    </div>
                    </div>
                `;
    }
    console.log(html);
    document.getElementById('courseContent').innerHTML = html;
    let more=document.getElementsByClassName("readmore");
    console.log(more);
    for(let i=0;i<more.length;i++){
    more[i].addEventListener("click",e=>{
        let id = e.target.id ;
          window.location = "about_course.html?id="+id;


     console.log(id);
     })
 } 
 }
 document.getElementById('logout').addEventListener('click',logout);
  function logout(){
    alert('hi');
    localStorage.removeItem('token');
  localStorage.removeItem("id");
  window.location = '../index.html'
  }
 
 ////////////////////////////////////////////////////
//  function readmorecourses(trg){
//     let id=trg.getAttribute("data-id");
//   console.log(id);
// //   window.location = "../Cosurse/coursePage.html?id="+id;
//  }
// <div class="image">
// <img src="${courses[i].photo}" alt="">
// </div>
// <hr>

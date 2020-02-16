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
                    <hr>
                    <div class="content">
                        <h3>${courses[i].courseTitle}</h3>
                        <label>Trainer :<a href="./trainer.html"> ${courses[i].trainerName} </a></label>
                        <p>Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.</p>
                        <span><a href="./about_course.html">Read More</a></span>
                    </div>
                    </div>
                `;
    }
    document.getElementById('courseContent').innerHTML = html;
}
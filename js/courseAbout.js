import {
    getCourseAbout
} from './api/courseInfo.js';

getCourseAbout(aboutCourse => {
    renderCorseProfile(aboutCourse);
});
console.log(aboutCourse);


//  ====================== Course Page ==========================

function renderCorseProfile(courseInfo) {
    const pagePhotoHtml = ` {
                <div class="picture"><a href="./NGO info.html?id=${courseInfo[0].id_ngo}"><img src="http://localhost:3000${courseInfo[0].logo}" alt="HTML" title="HTML"></a>
                </div>
                <ul class="ul">
                    <li>${courseInfo[0].title}</li>
                    <li>${courseInfo[0].start_date}</li>
                    <li>${courseInfo[0].location}</li>
                    <li>${courseInfo[0].number_of_seats}</li>
                    <div><a  id="enrollCourse" href="#">Enroll in Course</a></div>
                </ul>
    `;
    const aboutCourseHtml = `
                <h2 class="bio">${courseInfo[0].title}</h2>
                
                <hr>
                <p> ${courseInfo[0].description} </p>
    `;

    document.getElementById('pagePhoto').innerHTML = pagePhotoHtml;
    document.getElementById('aboutCourse').innerHTML = aboutCourseHtml;
    document.getElementById("enrollCourse").addEventListener("click", enroll);
}
const url = window.location.href;
console.log(getParameterByName("id", url));

function getParameterByName(name, url) {

    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
// document.getElementById("enrollCourse").addEventListener("click", enroll);

function enroll() {
    let idcourses = getParameterByName("id", url);
    console.log("id");
    console.log(localStorage.getItem("token") == null);
    if (localStorage.getItem("token") !== null) {
        fetch("http://localhost:3000/trainee/addcourse", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({
                    idtrainee: localStorage.getItem("id"),
                    idcourses: idcourses
                })
            })
            .then(re => re.json())
            .then(data => {
                console.log(data);
            })
    } else {
        // alert("Login OR Resgtaer");
        window.location.href = "../login.html";
    }
}
// if(data.status!==200){
//     alert("please Login");
//     window.location.href="../login.html";
// }else{
//     // window.location.href="../Course/NewCourse.html"

// }

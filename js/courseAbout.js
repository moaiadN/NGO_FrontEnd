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
                    <li>Dates:  ${courseInfo[0].start_date}  TO   ${courseInfo[0].end_datel}</li>
                    <li>Location:  ${courseInfo[0].location}</li>
                    <li>Remaining Seats:  ${courseInfo[0].remainingSeats || ''}</li>
                    <div> 
                    <!-- <button id="enroll" class="enroll">Enroll</button>
                    <button id="dropout" class="dropout">Dropout</button>-->

                    <input type="button" value="Enroll" id="enroll" class="enroll">
                    <span id="toEnroll"> </span>
                    <span id="done"> </span>
                    </div>
                </ul>
    `;
    const aboutCourseHtml = `
                <h2 class="bio">${courseInfo[0].title}</h2>
                <hr>
                <p> ${courseInfo[0].description} </p>
    `;
    document.getElementById('pagePhoto').innerHTML = pagePhotoHtml;
    document.getElementById('aboutCourse').innerHTML = aboutCourseHtml;

    
    let enrolle = document.getElementById("enroll");
    let dropoute = document.getElementById("dropout");

    // =============================================================
    enrolle.addEventListener('click', toggle)
    // dropoute.addEventListener('click' , dropout)

    function toggle() {
        if (enrolle.value === "Enroll") {
            enroll();
            enrolle.value = "Dropout";
        } else{
            dropout();
        }
    }
// ================================================

    let id = getParameterByName("id", url);
    console.log(id);
    let idtrainee = localStorage.getItem("id");
    console.log(idtrainee);

    fetch("http://localhost:3000/trainee", {
            method: 'GET',
        })
        .then(re => re.json())
        .then(data => {
            console.log(data)
            // console.log(data.id==id);
            let res = data.find(e => e.id == id && e.id_trainee == idtrainee);
            console.log(res)
            if (res !== undefined) {
                document.getElementById("enroll").setAttribute('value', 'Dropout');
            } 
        })
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



function enroll() {
    let enrolle = document.getElementById("enroll");
    let dropoute = document.getElementById("dropout");
    let idcourses = getParameterByName("id", url);
    console.log(localStorage.getItem("id"));
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
                // alert("DONE....update page")
                document.getElementById("done").innerHTML = "DONE";
            })
        // enrolle.style.display = 'none';
        // dropoute.style.display = 'block';
    } else {
        document.getElementById("toEnroll").innerHTML = "Register or Login to Enroll";
    }
}

function dropout() {
    let enrolle = document.getElementById("enroll");
    let dropoute = document.getElementById("dropout");
    let id_trainee = localStorage.getItem("id_c");
    console.log(id_trainee)
    if (localStorage.getItem("token") !== null) {
        fetch("http://localhost:3000/courses/trainee/" + id_trainee, {
                method: 'DELETE'
            })
            .then(re => {
                return re.json()
            })
            .then(data => {
                console.log(data);
                alert("DONE")
            })
        // dropoute.style.display = 'none';
        // enrolle.style.display = 'block';
        window.location.href = "../Front_End_Courses.html";
    }
    // else {
    //     // alert("Login OR Resgtaer");
    //     window.location.href = "../login.html";
    // }
}
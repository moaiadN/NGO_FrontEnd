import { getCourseAbout  } from './api/courseInfo.js';

getCourseAbout( aboutCourse => {
    renderCorseProfile(aboutCourse);
});



//  ====================== Course Page ==========================

function renderCorseProfile(courseInfo) {
    const pagePhotoHtml = `
                <div class="picture"><a href="./NGO info.html"><img src="${courseInfo.photo}" alt="HTML" title="HTML"></a>
                </div>
                <ul class="ul">
                    <li>${courseInfo.courseTitle}</li>
                    <li>${courseInfo.courseTime}</li>
                    <li>${courseInfo.address}</li>
                    <li>${courseInfo.seats}</li>
                    <div><a href="#" id="enrollCourse" >Enroll in Course</a></div>
                </ul>
    `;
    const aboutCourseHtml = `
                <h2 class="bio">${courseInfo.courseCategory}</h2>
                <h4 class="bio">${courseInfo.courseTitle}</h4>
                <hr>
                <p> ${courseInfo.about} </p>
    `;

    document.getElementById('pagePhoto').innerHTML = pagePhotoHtml;
    document.getElementById('aboutCourse').innerHTML = aboutCourseHtml;
}


document.getElementById("enrollCourse").addEventListener("click",enroll=>{
    if(localStorage.getItem("token")!==undefined){
    fetch("http://localhost:3000/trainee/check",{
    method:"POST",
    headers:{
        "Content-Type":"Application/json"
    },
    body:JSON.stringify({token:localStorage.getItem("token")})
    }
    
    ).then(re=>re.json()).then(data=>{
        if(data.status!==200){
            alert("please Login")
        }else{
            
            window.location.href="../Course/NewCourse.html"
            
        }
    })
    }else{
        /////////////////////////////ALERT Not Login
        alert("Login OR Resgtaer")
    }
})

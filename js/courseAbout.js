import { getCourseAbout  } from './api/courseInfo.js';

getCourseAbout( aboutCourse => {
    renderCorseProfile(aboutCourse);
});



//  ====================== Course Page ==========================

function renderCorseProfile(courseInfo) {

    const pagePhotoHtml = `
                <div class="picture"><a href="./NGO info.html?id=${courseInfo[0].id_ngo}"><img src="http://localhost:3000${courseInfo[0].logo}" alt="HTML" title="HTML"></a>
                </div>
                <ul class="ul">
                    <li>${courseInfo[0].title}</li>
                    <li>${courseInfo[0].start_date}</li>
                    <li>${courseInfo[0].location}</li>
                    <li>${courseInfo[0].number_of_seats}</li>
                    <div><a href="#" id="enrollCourse" onClick="Enroll()">Enroll in Course</a></div>
                </ul>
    `;
    const aboutCourseHtml = `
                <h2 class="bio">${courseInfo[0].title}</h2>
                <h4 class="bio">${courseInfo[0].description}</h4>
                <hr>
            
    `;

    document.getElementById('pagePhoto').innerHTML = pagePhotoHtml;
    document.getElementById('aboutCourse').innerHTML = aboutCourseHtml;
}
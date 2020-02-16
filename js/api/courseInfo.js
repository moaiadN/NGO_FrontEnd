const url = window.location.href;
console.log( getParameterByName("id", url));
function getParameterByName(name, url) {
    
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function getCourseAbout(callback) {
    let id=getParameterByName("id", url);
    console.log(id);
    fetch('http://localhost:3000/courses/'+id,
  {
  method:'GET',
  
  }) 
    .then(Response =>
          Response.json())
          .then( data =>{ 
              console.log(data);
              callback(data);
        
      });
    // if (callback) {
    //     callback({
    //         courseTitle: 'HTML Course',
    //         courseTime: '1.1.2020 - 1.5.2020',
    //         address: 'Almafraq - Zaatari Camp',
    //         seats: 'Remaining Seats',
    //         photo: './images/chamsLogo.jpg',
    //         courseCategory: 'Category',
    //         courseTitle: 'Web Developer',
    //         about: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.<br>Web browsers receive HTML documents from a web server or from localstorage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.',
    //     });
    // }
}
// document.getElementById("enrollCourse").addEventListener("click",enroll=>{
//     let idcourses=getParameterByName("id", url);
//     console.log(id);
//     if(localStorage.getItem("token")!==undefined){
//     fetch("http://localhost:3000/trainee/check",{
//     method:"POST",
//     headers:{
//         "Content-Type":"Application/json"
//     },
//     body:JSON.stringify({token:localStorage.getItem("token"),
//     idcourses:idcourses
// })
//     }
    
//     ).then(re=>re.json()).then(data=>{
//         if(data.status!==200){
//             alert("please Login");
//             window.location.href="../login.html";
//         }else{
//             // window.location.href="../Course/NewCourse.html"
            
//         }
//     })
//     }else{
//         /////////////////////////////ALERT Not Login
//         alert("Login OR Resgtaer")
//     }
// })
export { getCourseAbout };
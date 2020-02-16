
url = window.location.href;
console.log( getParameterByName("id", url));
function getParameterByName(name, url) {
    
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
getInfOneCourse();
// let save_btn = document.getElementById('save');
// save_btn.style.display = "none";
// let ProfileImg = document.getElementById('preview').style.cursor = "pointer";
// let cancle_btn = document.getElementById('cancle');
// cancle_btn.style.display = "none";
// let token = localStorage.getItem('token');
// let header = new Headers();
// header.append('content-type', 'application/json')
// header.append('authorization', token)


////////////////////////////////////////////////
function renderOneCourses(data) {

    const htmlArray = data.map(( courses,index) =>
    ' <div> <h3 >title :</h3> <input id="title" type="text" class="para input" value="'+courses.title+
    '"></input></div> <div>  <h3 >Trainer Of Course:</h3>  <a id="'+courses.trainer+'" class="para aLink"  onclick="openProfile(this.id)">'+courses.name+
    '</a> </div>  <div> <h3>descrption : </h3> <input  id="description"type="text" class="para input" value="'+courses.description+
    '"></input></div>  <div><h3>dates :</h3> <input id="dates1" type="text" class="para input" value="'+ courses.start_date+'"></input> </div> <div><h3>dates :</h3>   <input id="dates2" type="text" class="para input" value="'+ courses.end_datel+
    '"></input></div> <div> <h3> location :</h3><input id="location" type="text"class="para input" value="'+courses.location+
    '"> </input> </div><div> <h3>number of seats:    </h3> <input id="number" type="text" class="para input" value="'+courses.number_of_seats+
    '"></input> </div><div> <h3> Trainee Of Course:</h3><a id="traineeLink"   class="para aLink" onclick="getListTrainee()"> Trainee</a> </div>  <div class="btn">  <button type="submit" id="save" class="savebtn" onclick="change_value()">Save</button>  <button type="submit" id="cancle" class="Canclebtn" onclick="goBack()">Cancle</button></div> '
    );
    // console.log(htmlArray);
    document.getElementById("container").innerHTML = htmlArray;
  }
  ////////////////////////////////////////////////////////////////
 function getInfOneCourse(){
    let id=getParameterByName("id", url);
    console.log(id);
    fetch('http://localhost:3000/courses/'+id,
  {
  method:'GET',
  
  }) 
  .then(Response => Response.json())
  .then( data =>{ 
    console.log(data);
   
        renderOneCourses(data);
           
  });
  
  }
  ///////////////////////////////////////////////////////////////
  // document.getElementById("traineeLink").addEventListener('click',getListTrainee);
  function getListTrainee(){
    window.location = "../Trainee/getAllTrainee.html";
    let id=getParameterByName("id", url);
    console.log(id);
    fetch('http://localhost:3000/courses/trainee/'+id,
    {
    method:'GET',
    
    }) 
    .then(Response => Response.json())
    .then( data =>{ 
      console.log(data);
     
      function renderTrainees(data) {
        const htmlArray = data.map(
          trainer => '<div class="list"><div  class="im"><img onclick="" id = ' + trainer.id + ' src="" alt=""></div><div  class="im contnt desc"><h3 >' + trainer.name + ' <img class="remove" id = ' + trainer.id + '  src="img/error.png"></h3><p>' + trainer.email + '</p><p >' + trainer.mobile + '</p><p>' + trainer.address + '</p></div></div></a></div>'
        );

        document.getElementById("div1").innerHTML += htmlArray.join('');
             
        };
        renderTrainees(data);
    })
    
  }
  //////////////////////////////////////////////////////////////


  function openProfile(id){
    // alert("hi");
    // console.log();
  // let id=document.getElementById("trainer").value;
   console.log(id);
  window.location = "../Trainer/trainerProfile.html?id="+id;
  
      
    
  };
  //////////////////////////////////////////////////////////////

function change_value() {
  let CourseName=document.getElementById("title");
let DateBegin=document.getElementById("dates1");
let DateEnd=document.getElementById("dates2");
let CourseLocation=document.getElementById("location");
let NumberOfSeats=document.getElementById("number"); 
const desc=document.getElementById('description');
// let trainerName = document.getElementById("addtriner").value;
// console.log(trainerName);
console.log(DateEnd.value);

// window.location = "index.html";

let header=new Headers();
header.append("content-type", "application/json");
let id=getParameterByName("id", url);
console.log(id);
fetch ('http://localhost:3000/courses/'+id,{
method: 'PUT',
headers:header,
body:JSON.stringify({
    title:CourseName.value,
    location:CourseLocation.value,
    desctiption:desc.value,
    date_begin:DateBegin.value,
    date_end:DateEnd.value,
    number_of_seats:NumberOfSeats.value
})
    }   
    ).then(res=>{
        res.json()
    })
    .then(data=>{
        console.log(data);
        
        
    });

  }
  let cancle_btn=document.getElementById('cancle');
  // cancle_btn.addEventListener('click',goBack);
 function goBack() {
window.location = "../Course/index.html"; //specify the url to redirect
}
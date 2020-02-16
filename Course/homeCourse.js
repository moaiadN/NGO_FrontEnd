// import {upatedPage} from './api/course.js' ;
if(localStorage.getItem('token')==undefined){
  window.location = '../Login/Login.html'
}

function LogOut() {
  localStorage.removeItem('token');
  localStorage.removeItem("id");
  window.location = '../Login/Login.html'
}

upatedPage();
// let x  = "";
////////////////////////////////////////////////////////////////////
 function rendercourses(data) {
console.log(data);
  const htmlArray = data.map(( courses,index) =>
     '<div data-id='+courses.id+' class="list"><h3>'+courses.title+'<img id="remove" class="remove" src="img/error.png" onclick="deleteCourse"></h3>' +
    '<p>'+courses.description+ '</p> <a href="" ><h4 style="margin-left: 17px;color: blue;">'+courses.name+'</h4></a><button class="MoreInfo" onclick="showOneCourse(trg)" >  More Information </button></div>'
   );
   document.getElementById("AllCourses").innerHTML += htmlArray.join('');
   let re=document.getElementsByClassName("remove")
 for(let i=0;i<re.length;i++){
        re[i].addEventListener("click",e=>{
        deleteCourse(e.target)
            });
          }
   let more=document.getElementsByClassName("MoreInfo");
   console.log(more);
   for(let i=0;i<more.length;i++){
   more[i].addEventListener("click",e=>{
    // let trg = e.target,
    // trg_par = trg.parentElement.parentElement;
    // console.log(trg_par);
   showOneCourse(e.target)
    })
} 

}
/////////////////////////////////////////////////////

// function getTrainerName(){
  // fetch('http://localhost:3000/courses/trainres/18',
  // {
  //     method:'GET'

  // }) 
  // .then(Response =>
  //       Response.json())
  //       .then( data =>{ 
  //           console.log(data);
  //           // rendercourses(data);
  //           console.log(data[0].name); 
  //           x = data[0].name;
  //   });
  // }

////////////////////////////////////////////////////

function upatedPage() {
  let token = localStorage.getItem('id');
console.log(token)
  fetch('http://localhost:3000/courses/ngos/' + token,
  {
      method:'GET'

  }) 
  .then(Response =>
        Response.json())
        .then( data =>{ 
            console.log(data);
            rendercourses(data);
    });
  }
//////////////////////////////////////////////////////////////////////
  function deleteCourse(trg){
    console.log(trg);
    let id=trg.parentElement.parentElement.getAttribute("data-id");;
    trg.parentElement.parentElement.remove();
    let id_ngo = localStorage.getItem('id');
   console.log(id);
   console.log(id_ngo);
  const myheaders=new Headers();
 myheaders.append('Content-Type','application/json'); 
  	fetch('http://localhost:3000/courses',
  		{
    method:'DELETE',
     headers:myheaders,
     body:JSON.stringify({
      id:id,
      id_ngo:id_ngo
     })
     
}).then(Response =>
      Response.json())
      .then( data =>{ console.log(data);

  })
}
/////////////////////////////////////////////////////////////
// function renderOneCourses(data) {

//   const htmlArray = data.map(( courses,index) =>
//   ' <div> <h3 >title :</h3> <p class="para">'+courses[index].title+'</p></div> '
//   );
//   console.log(htmlArray);
//   document.getElementById("containerCourses").innerHTML += htmlArray.join('');
// }
////////////////////////////////////////////////////////////////
function showOneCourse(trg){
  let id=trg.parentElement.getAttribute("data-id");
  console.log(id);
  window.location = "../Course/coursePage.html?id="+id;


}
    
     

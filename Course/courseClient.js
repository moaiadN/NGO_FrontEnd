let cancle_btn=document.getElementById('cancle');
// let save_btn=document.getElementById('save');
// save_btn.addEventListener('click',goBack);
cancle_btn.addEventListener('click',goBack);
 function goBack() {
window.location = "../Course/index.html"; //specify the url to redirect
}
let input=document.getElementsByTagName("input");         
let Name_course_P=document.getElementById("Name_course_P");
let Date_course_P=document.getElementById("Date_course_P");
let DateEnd_course_P=document.getElementById("DateEnd_course_P");
let location_course_P=document.getElementById("location_course_P");
let CourseName=document.getElementById("contentNameCourse");
let DateBegin=document.getElementById("date_begin");
let DateEnd=document.getElementById("date_end");
let CourseLocation=document.getElementById("location");
let NumberOfSeats=document.getElementById("range_weight"); 

const checkName = /^[a-z]|[0-9]/i;
function checkNameRegExp() {
if (CourseName.value == "") {
Name_course_P.innerHTML = "the Filed is empty";
CourseName.style.borderBottomColor = "red";
}
else if (checkName.test(CourseName.value) == false) {
Name_course_P.innerHTML="Name is Falied";
CourseName.style.borderBottomColor="red";
}
else {
CourseName.style.borderBottomColor="green";
Name_course_P.innerHTML="";
}
}

function validatedate(){
// var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
var date_regex=/^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
if (DateBegin.value == "" ) {
Date_course_P.innerHTML = "the Filed is empty";
DateBegin.style.borderBottomColor = "red";
}
else if (date_regex.test(DateBegin.value)==false) {
Date_course_P.innerHTML="Date is falied";
DateBegin.style.borderBottomColor="red";} 

else {
DateBegin.style.borderBottomColor="green";
Date_course_P.innerHTML="";
}  
}

function validatedateEnd(){
var date_regex=/^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
if ( DateEnd.value == "" ) {
DateEnd_course_P.innerHTML = "the Filed is empty";
DateEnd.style.borderBottomColor = "red";
}
else if (date_regex.test( DateEnd.value)==false) {
DateEnd_course_P.innerHTML="Date is falied";
DateEnd.style.borderBottomColor="red";} 

else {
DateEnd.style.borderBottomColor="green";
DateEnd_course_P.innerHTML="";
}  
}

function ValidateNumber(){
//const Number_regex = /[0-9]/;
const Number_regex = /^[+]?[1-9]\d*$/;

if (NumberOfSeats.value == ""  ) {
Number_Seats_P.innerHTML = "the Filed is empty";
NumberOfSeats.style.borderBottomColor = "red";
}
else if (Number_regex.test( NumberOfSeats.value)==false ) {
Number_Seats_P.innerHTML="Number of seats is falied";
NumberOfSeats.style.borderBottomColor="red";} 

else  {
NumberOfSeats.style.borderBottomColor="green";
Number_Seats_P.innerHTML="";
} 
}

function ValidateLocation() {
const Location_regex = /^[a-z]|[0-9]/i;
if (CourseLocation.value == "") {
location_course_P.innerHTML = "the Location is empty";
CourseLocation.style.borderBottomColor = "red";
}
else if (checkName.test(CourseLocation.value) == false) {
location_course_P.innerHTML="Location is Falied";
CourseLocation.style.borderBottomColor="red";
}
else {
CourseLocation.style.borderBottomColor="green";
location_course_P.innerHTML="";
}
}
getTrainer();
function getTrainer(){
  let id_ngo = localStorage.getItem('id');
    fetch('http://localhost:3000/trainer/ngos/'+id_ngo, {
        method: 'GET',
      })
        .then(Response =>
          Response.json())
        .then(data => {
          const htmlArray = data.map( (trainer , index) =>'<option id ="optionTraine"  value="'+trainer.id+'"> '+ trainer.name+ '</option>');
            document.getElementById("addtriner").innerHTML += htmlArray;
            option=document.getElementsByTagName('option');
            // console.log(option[1].id);
            // document.getElementById("addtriner").addEventListener('change',getid(id));
            // onchange="getid(this.id)"
            // for(let i=0;i<option.length;i++){
            //     document.getElementById("addtriner").addEventListener('change', e=>{
            // //         let trg = e.target,
            // //         trg_par = option[i].parentElemen            //         console.log(e.target[i].id);
            // console.log(option[i].id == e.target[i].id);
                // let name= document.getElementsByTagName('option')[i].textContent;
                // console.log(name);
                // console.log(document.getElementsByTagName('option')[i].value);
                
              })   }
let add =document.getElementById("addtriner");
  

add.addEventListener('change', op)
function op(e){
    let mm = e.target.value;
    console.log(mm);
// return mm;
}



document.getElementById("save").addEventListener("click" , addCoures);
function addCoures() {
let CourseName=document.getElementById("contentNameCourse");
let DateBegin=document.getElementById("date_begin");
let DateEnd=document.getElementById("date_end");
let CourseLocation=document.getElementById("location");
let NumberOfSeats=document.getElementById("range_weight"); 
const desc=document.getElementById('desc');
let trainerName = document.getElementById("addtriner").value;
console.log(trainerName);

//window.location = "index.html";

let header=new Headers();
header.append("content-type", "application/json");
let id = localStorage.getItem('id');
let token = localStorage.getItem('token')

// header.append('Authorization', token)
console.log(token)
fetch ('http://localhost:3000/courses/'+id,{
method: 'POST',
headers:header,
body:JSON.stringify({
    title:CourseName.value,
    location:CourseLocation.value,
    desctiption:desc.value,
    date_begin:DateBegin.value,
    date_end:DateEnd.value,
    number_of_seats:NumberOfSeats.value,
    trainerName:trainerName
})
    }   
    ).then(res=>{
       return res.json()
    })
    .then(data=>{
        console.log(data);
        
        
    });
   
}
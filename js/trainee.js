// =============================================
import {getInfo} from './api/trainee.js';
getInfo('', info => {
    renderProfile(info);
});
//  ================= Nav ===============
import { renderHeader } from "./api/header.js";
let token = null;
token = localStorage.getItem('token');
renderHeader('list', token !== null);

// ===========================
let save_btn=document.getElementById('save_btn');
let cancel_btn=document.getElementById('cancel_btn')
let values=[];
save_btn.style.display="none"
cancel_btn.style.display="none"
let inputs=document.getElementsByClassName("input");
for(let i=0;i<inputs.length;i++){
  inputs[i].setAttribute("readonly","")
  inputs[i].style.backgroundColor="transparent"
  }
  document.getElementById('editIcon').addEventListener('click', function change_value() {
  values=[];
  save_btn.style.display="block"
  cancel_btn.style.display="block"
  for(let i=0;i<inputs.length;i++){
    if(i==1){
      console.log(inputs[i].value)
    }else{
      values.push(inputs[i].value);
      console.log(inputs[i].value)
    }
  }
  for(let i=0;i<inputs.length;i++){
    if(i==1){
    }else{
      inputs[i].removeAttribute("readonly")
      inputs[i].style.backgroundColor="white"
    }
  }
});
document.getElementById('save_btn').addEventListener('click',function save(){
  for(let i=0;i<inputs.length;i++){
  inputs[i].setAttribute("readonly","")
  inputs[i].style.backgroundColor="transparent"
  }
  cancel_btn.style.display="none"
  save_btn.style.display="none"
});
document.getElementById('cancel_btn').addEventListener('click',function cancel(){
  for(let i=0;i<inputs.length;i++){
  inputs[i].setAttribute("readonly","")
  inputs[i].style.backgroundColor="transparent"
  }
  cancel_btn.style.display="none"
  save_btn.style.display="none"
  for(let i=0;i<inputs.length;i++){
    if(i==1){
      console.log("not:"+i)
    }else{
      inputs[i].value=values[i];
      console.log("i="+i)
    }
}
});
// ============================================
function renderProfile(traineeInfo) {
  const profileDataHtml = `
      <div class="eE-OA">
      <label for="pepName">Full name </label>
      <div class="ada5V"><input aria-required="false" value="${traineeInfo.name}" readonly id="name" type="text" class="input"
              value=""></div>
      </div>
      <div class="eE-OA">
        <label for="pepUsername">Email</label>
        <div class="ada5V"><input aria-required="true" value="${traineeInfo.email}" readonly type="text" class="input"
                value="" id="email"></div>
      </div>
      <div class="eE-OA">
            <label for="pepEmail">Adrdress</label>
            <div class="ada5V"><input aria-required="false" value="${traineeInfo.address}" readonly id="address" type="text" class="input"
                    value=""></div>
        </div>
        <div class="eE-OA">
            <label for="Mobail Number">Mobail Number</label>
            <div class="ada5V"><input aria-required="false" value="${traineeInfo.mobile}" readonly id="phone" type="text" class="input"
                    value=""></div>
        </div>
  `;
  const profilePhotoHtml = `<img src="${traineeInfo.photo}" alt="Trainer pic" title="Trainer" width="240px" height="240px" id="photo">`;

  
  document.getElementById('profileContent').innerHTML = profileDataHtml;
  document.getElementById('profilePhoto').innerHTML = profilePhotoHtml;
}




document.getElementById("save_btn").addEventListener("click",e=>{
let name=document.getElementById("name").value
let phone=document.getElementById("phone").value
let address=document.getElementById("address").value
updata(name,phone,address)
})

function updata(name,phone,address){


  fetch("http://localhost:3000/trainee/EditeInformation",{
    method:"PUT",
    headers:{
      "Content-Type":"Application/json",
      "Authorization":"Barier "+localStorage.getItem("token")
    },
    body:JSON.stringify({name:name,phone:phone,address:address})
    }).then(re=>re.json()).then(res=>{
      console.log(res)
    })
  
  
  
  }
  //////////////////////////////////////////////////
  document.getElementById('logout').addEventListener('click',logout);
  function logout(){
    alert('hi');
    localStorage.removeItem('token');
  localStorage.removeItem("id");
  window.location = '../index.html'
  }

  // function load_profile(){
  //   let id=localStorage.getItem("id")
  //   fetch("http://localhost:3000/trainee/"+id,{
  //     method:"GET"
  //   }).then(re=>re.json()).then(data=>{
  //       console.log(data)
  //       renderProfile({
  //         name:data[0].name,
  //         email:data[0].email,
  //         phone:data[0].mobile,
  //         address:data[0].address
  //       })
  //     })
    
    
    
    
   
  // }
  
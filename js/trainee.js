
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
      <div class="ada5V"><input aria-required="false" value="${traineeInfo.name}" readonly id="pepName" type="text" class="input"
              value=""></div>
      </div>
      <div class="eE-OA">
        <label for="pepUsername">Email</label>
        <div class="ada5V"><input aria-required="true" value="${traineeInfo.email}" readonly type="text" class="input"
                value=""></div>
      </div>
      <div class="eE-OA">
            <label for="pepEmail">Adrdress</label>
            <div class="ada5V"><input aria-required="false" value="${traineeInfo.address}" readonly id="pepEmail" type="text" class="input"
                    value=""></div>
        </div>
        <div class="eE-OA">
            <label for="Mobail Number">Mobail Number</label>
            <div class="ada5V"><input aria-required="false" value="${traineeInfo.phone}" readonly id="pepPhone Number" type="text" class="input"
                    value=""></div>
        </div>
  `;
  const profilePhotoHtml = `<img src="${traineeInfo.photo}" alt="Trainer pic" title="Trainer" width="240px" height="240px" >`;
  document.getElementById('profileContent').innerHTML = profileDataHtml;
  document.getElementById('profilePhoto').innerHTML = profilePhotoHtml;
}

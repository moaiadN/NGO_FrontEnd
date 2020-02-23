const url = window.location.href;

function getParameterByName(name, url) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
// =============================================
// import {getInfo} from './api/trainee.js';
// getInfo('', info => {
//     renderProfile(info);
// });
//  ================= Nav ===============
document.getElementById("save_btn").addEventListener("click", edit)
var b64 = ''
console.log(b64)

function edit() {
  const name = document.getElementById("pepName").value;
  const address = document.getElementById("pepaddress").value;
  const num = document.getElementById("pepPhoneNumber").value;
  const Id = localStorage.getItem("id");
  console.log(Id);
  const myheader = new Headers();

  myheader.append('Content-Type', 'application/json');
  myheader.append('authorization', localStorage.getItem("token"));

  const body = {
    name: name,
    address: address,
    num: num,
    photo: b64
  }
  if (b64 !== '') {
    body.photo = b64;
  }
  console.log(body)
  fetch('http://localhost:3000/trainee/EditeInformation', {
      method: 'put',
      headers: myheader,
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    })
}
import {
  renderHeader
} from "./api/header.js";
let token = null;
token = localStorage.getItem('token');
renderHeader('list', token !== null);
// const url = window.location.href;
// console.log( getParameterByName("id", url));
// function getParameterByName(name, url) {

//     name = name.replace(/[\[\]]/g, '\\$&');
//     var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, ' '));
// }
// ===========================
let save_btn = document.getElementById('save_btn');
let cancel_btn = document.getElementById('cancel_btn')
let values = [];
save_btn.style.display = "none"
cancel_btn.style.display = "none"
let inputs = document.getElementsByClassName("input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].setAttribute("readonly", "")
  inputs[i].style.backgroundColor = "transparent"
}
document.getElementById('editIcon').addEventListener('click', function change_value() {
  values = [];
  save_btn.style.display = "block"
  cancel_btn.style.display = "block"
  for (let i = 0; i < inputs.length; i++) {
    if (i == 1) {
      console.log(inputs[i].value)
    } else {
      values.push(inputs[i].value);
      console.log(inputs[i].value)
    }
  }
  for (let i = 0; i < inputs.length; i++) {
    if (i == 1) {} else {
      inputs[i].removeAttribute("readonly")
      inputs[i].style.backgroundColor = "white"
    }
  }
});
document.getElementById('save_btn').addEventListener('click', function save() {
  updateInfo()
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].setAttribute("readonly", "")
    inputs[i].style.backgroundColor = "transparent"
  }
  cancel_btn.style.display = "none"
  save_btn.style.display = "none"
});
document.getElementById('cancel_btn').addEventListener('click', function cancel() {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].setAttribute("readonly", "")
    inputs[i].style.backgroundColor = "transparent"
  }
  cancel_btn.style.display = "none"
  save_btn.style.display = "none"
  for (let i = 0; i < inputs.length; i++) {
    if (i == 1) {
      console.log("not:" + i)
    } else {
      inputs[i].value = values[i];
      console.log("i=" + i)
    }
  }
});

// ============================================

let id = localStorage.getItem('id');
console.log(id)
fetch('http://localhost:3000/trainee/id/' + id, {
  meathod: 'GET',
}).then(response => response.json()).then(data => {
  console.log(data);

  renderProfile(data[0]);
  let inputs = document.getElementsByClassName("input");

  for (let i = 0; i < inputs.length; i++) {

    inputs[i].removeAttribute("readonly");
    inputs[i].style.backgroundColor = "white";
  }
  var fileupload  = document.getElementById("fileupload");
  var image = document.getElementById("image");
  console.log(fileupload )

  image.addEventListener("click", function () {
    fileupload.click();
  });

  fileupload.addEventListener("change", function () {
    changeImage(this);
  });
  // const inpute = document.getElementById("fileupload ");

  fileupload .onchange = function () {

    var file = fileupload .files[0],
      img = new FileReader();
    img.onloadend = function () {
      b64 = img.result.replace(/^data:.+;base64,/, '');
    };

    img.readAsDataURL(file);
  };

  function changeImage(input) {
    var reader;
    console.log(input.files && input.files[0])
    if (input.files && input.files[0]) {

      reader = new FileReader();
      reader.onload = function (e) {
        image.setAttribute('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);

    }
  }
});

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
            <div class="ada5V"><input aria-required="false" value="${traineeInfo.address}" readonly id="pepaddress" type="text" class="input"
                    value=""></div>
        </div>
        <div class="eE-OA">
            <label for="Mobail Number">Mobail Number</label>
            <div class="ada5V"><input aria-required="false" value="${traineeInfo.mobile}" readonly id="pepPhoneNumber" type="text" class="input"
                    value=""></div>
        </div>
  `;
  const photoUrl = traineeInfo.picture === null ?
    '/imeges/trainee/PERSON.PNG' :
    traineeInfo.picture;
  console.log(photoUrl);
  const profilePhotoHtml = `<img src="http://localhost:3000${photoUrl}" id="image" title="Trainee">
  <input type="file" id="fileupload" class="fileupload" >
  `;

  document.getElementById('profileContent').innerHTML = profileDataHtml;
  document.getElementById('profilePhoto').innerHTML = profilePhotoHtml;
}


function updateInfo() {
  let header = new Headers();
  header.append('Content-Type', 'Application/json')
  let token = localStorage.getItem('token')
  header.append('authorization', token)
  const name = document.getElementById("pepName").value;
  const address = document.getElementById("pepaddress").value;
  const num = document.getElementById("pepPhoneNumber").value;

  fetch('http://localhost:3000/trainee/EditeInformation', {
    method: 'PUT',
    headers: header,
    body: JSON.stringify({
      name: name,
      phone: num,
      address: address
    })

  }).then(re => {
    return re.json()
  }).then(data => {
    console.log(data)
  })
}
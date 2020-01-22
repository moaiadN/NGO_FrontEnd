let save_btn=document.getElementById('save_btn');
let cancle_btn=document.getElementById('cancle_btn')
let values=[];
// let trainee = {
//   name: '',
//   email: '',
//   address: '',
//   mobile: '',
//   picture: '',
//   password: '',
// };
// let isReadonly = true;

// fetch

// function render(trainee, isReadonly) {

// }


save_btn.style.display="none"
cancle_btn.style.display="none"
let inputs=document.getElementsByClassName("input");
for(let i=0;i<inputs.length;i++){
  inputs[i].setAttribute("readonly","")
  inputs[i].style.backgroundColor="transparent"
  }

function change_value(){
  values=[];
  save_btn.style.display="block"
  cancle_btn.style.display="block"
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
}
function save(){
  for(let i=0;i<inputs.length;i++){
  inputs[i].setAttribute("readonly","")
  inputs[i].style.backgroundColor="transparent"
  }
  cancle_btn.style.display="none"
  save_btn.style.display="none"
}

function cancle(){
  for(let i=0;i<inputs.length;i++){
  inputs[i].setAttribute("readonly","")
  inputs[i].style.backgroundColor="transparent"
  }
  cancle_btn.style.display="none"
  save_btn.style.display="none"
  console.log(values);
  for(let i=0;i<inputs.length;i++){
    if(i==1){
      console.log("not:"+i)
    }else{
      inputs[i].value=values[i];
      console.log("i="+i)

    }
    

}
}

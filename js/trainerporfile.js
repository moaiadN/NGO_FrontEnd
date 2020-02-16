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
NgoPorfile()
function renderngoporfile(data){
    console.log(data);
    const htmlArray = data.map(( trainer,index) =>`<header>
    <span class="title">${trainer.name}</span>
</header>
<figure>
    <div class="profile_pic">
        <div class="picture"><img src="http://localhost:3000${trainer.picture}" alt="Trainer pic" title="Trainer"></div>
        <ul class="ul">
            <li>${trainer.mobile}</li>
            <li>${trainer.address}</li>
            <li>${trainer.email}</li>
        </ul>
    </div>
    <div class="about">
        <span class="bio">BIO</span>
        <p>${trainer.short_bio}</p>
    </div>
</figure>
<!-- =================================== footer =============================================== -->
<footer class="footer">
    <div class="footer-content"> All rights reserved. 2019</div>
</footer>`);
document.getElementById("conteriner").innerHTML += htmlArray.join('');
}
///////////////////////////////////////////////
function NgoPorfile() {
    let id=getParameterByName("id", url);
    console.log(id);
    fetch('http://localhost:3000/trainer/'+id,
    {
        method:'GET'
  
    }) 
    .then(Response =>
          Response.json())
          .then( data =>{ 
            //   console.log(data);
              renderngoporfile(data);
      });
    }

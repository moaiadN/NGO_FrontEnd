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
    const htmlArray = data.map(( ngo,index) =>`<header> <span class="title">${ngo.name}</span></header><figure>
    <div class="profile_pic">
        <div class="picture"><img src="http://localhost:3000${ngo.logo}" alt="Organization" title="Organization" width="240px"
                height="240px"></div>
        <div class="ngo_url"><a href="${ngo.website}" target="_blank">${ngo.website}</a></div>
    </div>
    <div class="about">
        <span class="bio">Description</span>
        <p>${ngo.bio}</p>
    </div>
</figure>

<footer class="footer">
    <div class="footer-content"> All rights reserved. 2019</div>
</footer>`);
document.getElementById("conteriner").innerHTML += htmlArray.join('');
}
///////////////////////////////////////////////
function NgoPorfile() {
    let id=getParameterByName("id", url);
    console.log(id);
    fetch('http://localhost:3000/ngo/'+id,
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

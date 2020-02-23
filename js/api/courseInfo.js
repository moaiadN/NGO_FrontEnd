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
    
}

export { getCourseAbout };
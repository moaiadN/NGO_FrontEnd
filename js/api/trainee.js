function register(name, email, address, phone, password, callback) {
    // fetch(...).then(response => response.json()).then(data => {
    //     if (callback) {
    //         callback(data.id, data.token);
    //     }
    // });

    if (callback) {
        callback(1, 'klfshdklsfhkdsh;sfjslkjhjfk;dsjfkljldfjs;fj;');
    }
}

function login(email, password, callback) {
    // fetch(...).then(response => response.json()).then(data => {
    //     if (callback) {
    //         callback(data.id, data.token);
    //     }
    // });

    if (callback) {
        // callback(1,email , password, token);
        let token = 'klfshdklsfhkdshsfjslkjhjfkdsjfkljldfjsfj';
        localStorage.setItem('token', token)
        callback({
            email: 'asd@as.aa',
            password: '123',
        });
    }
}

// function getInfo(token, callback) {
//     let id=localStorage.getItem("id")

//         fetch("http://localhost:3000/trainee/"+id,{
//       method:"GET"
//     }).then(re=>re.json()).then(data=>{
//         console.log(data.data)
//         if (callback) {
//             callback(data.data);
//         }
    
//     })
    



// }

export {
    register,
    login,
    // getInfo
};
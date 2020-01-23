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
        callback(1, 'klfshdklsfhkdsh;sfjslkjhjfk;dsjfkljldfjs;fj;');
    }
}

function getInfo(token, callback) {
    if (callback) {
        callback({
            id: 1,
            name: 'samee7',
            email: 'a@b.c',
            address: 'akjsdhaskjdasdh',
            phone: '1273606787',
            photo: './images/person.png'
        });
    }
}

export {
    register,
    login,
    getInfo
};
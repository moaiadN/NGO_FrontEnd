function getAllCourses(callback) {
    // fetch(...).then(response => response.json()).then(data => {
    //     if (callback) {
    //         callback(data.id, data.token);
    //     }
    // });
    if (callback) {
        callback([
            {
                id:1,
                courseTitle:'First Course',
                trainerId: 11,
                trainerName: 'Bashar',
                photo: './images/HTML5.png'
            },
            {
                id:2,
                courseTitle:'Second Course',
                trainerId: 2,
                trainerName: 'Sameer',
                photo: './images/chams.jpg'
            },  
            {
                id:3,
                courseTitle:'Third Course',
                trainerId: 6,
                trainerName: 'salem',
                photo: './images/chams.jpg'
            },
            {
                id:4,
                courseTitle:'Fourth Course',
                trainerId: 10,
                trainerName: 'salem',
                photo: './images/chams.jpg'
            },
            {
                id:5,
                courseTitle:'Fifth Course',
                trainerId: 8,
                trainerName: 'salem',
                photo: './images/chams.jpg'
            },
        ]);
    }
}

export { getAllCourses };
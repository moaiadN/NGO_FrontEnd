function search( search) {
    // fetch('',{
   
    // })
    
    // .then(response => response.json())
    // .then(data => {
    //     if (callback) {
    //     callback(data.id, data.token);
    //     })
    // };
    if (search) {
        search([
            {
                id:1,
                courseTitle:'First Course',
                trainerId: 11,
                trainername:'mahmod',
                courseName: 'js',
                photo: './images/HTML5.png'
            },
            {
                id:2,
                courseTitle:'Second Course',
                trainerId: 2,
                trainername:'yazid',
                courseName: 'html',
                photo: './images/chams.jpg'
            },  
            {
                id:3,
                courseTitle:'Third Course',
                trainerId: 6,
                trainername:'osama',
                courseName: 'html',
                photo: './images/chams.jpg'
            },
            {
                id:4,
                courseTitle:'Fourth Course',
                trainerId: 10,
                trainername:'hamza',
                courseName: 'css',
                photo: './images/chams.jpg'
            },
            {
                id:5,
                courseTitle:'Fifth Course',
                trainerId: 8,
                trainername:'ahmed',
                courseName: 'js',
                photo: './images/chams.jpg'
            },
        ]);
    }
 
export { search };
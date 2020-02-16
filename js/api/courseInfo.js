function getCourseAbout(callback) {
        // fetch(...).then(response => response.json()).then(data => {
    //     if (callback) {
    //         callback(data.id, data.token);
    //     }
    // });
    if (callback) {
        callback({
            courseTitle: 'HTML Course',
            courseTime: '1.1.2020 - 1.5.2020',
            address: 'Almafraq - Zaatari Camp',
            seats: 'Remaining Seats',
            photo: './images/chamsLogo.jpg',
            courseCategory: 'Category',
            courseTitle: 'Web Developer',
            about: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.<br>Web browsers receive HTML documents from a web server or from localstorage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.',
        });
    }
}

export { getCourseAbout };
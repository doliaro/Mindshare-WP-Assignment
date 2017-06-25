'use strict';

//Make the API request and parse the JSON response
function fetch_json(){
    var request = new XMLHttpRequest();

    request.open('GET', 'https://mind.sh/are/wp-json/posts');

    // Make the request, check for success and parse the JSON
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            var post_count = data.length;
            create_template(data, post_count);
        } else {
            console.log("Connected to the server, but it returned an error.");
        }
    };

    request.onerror = function() {
        console.log("Connection error");
    };

    request.send();
}
// Loop through the recieved JSON content and build out
// the necessary parts of the data
function create_template(post_data, post_count){
    var display = '';

    for (var i = 0; i < post_count; i++) {
        display += '<h1 class="c-title">' + post_data[i].title + '</h2>';
        display += '<p style="color:#00b9eb"> by ' + post_data[i].author.first_name + ' ' + post_data[i].author.last_name + '</p>';
        if(post_data[i].featured_image) {
            display += '<div class=image>';
            display += '<img src="' + post_data[i].featured_image.link + '"</img>';
            display += '</div>';
        }
        display += post_data[i].content;
        display += '<hr>';
    };

    // Append content to the container
    var content_container = document.getElementById('content-container');
    content_container.innerHTML = display;
}
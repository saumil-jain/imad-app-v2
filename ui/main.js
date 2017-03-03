var button = document.getElementById("counter");

button.onclick = function() {
    // create request var
    var request = new XMLHttpRequest();
    
    // capture response and set it on the page
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    };
    
    // make the request
    request.open('GET', '/counter', true);
    request.send(null);
};

var submit = document.getElementById("submit_btn");
submit.onclick = function() {
    // send the name to the server
    var name = document.getElementById("name");
    
    
    // capture list of names and render
    var names = ['name1', 'name2', 'name3'];
    var list = '';
    for (var i = 0; i < names.length; i++) {
        list = list + '<li>' + names[i] + '</li>';
    }
    var unorderedList = document.getElementById('nameList');
    unorderedList.innerHTML = list;
};
var button = document.getElementById("counter");

// counter button
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

// submit name
var submit = document.getElementById("submit_btn");
submit.onclick = function() {
    // send the name to the server
    var request = new XMLHttpRequest();
    var nameInput = document.getElementById("name");
    var name = nameInput.value;

    // empty name validation
    if (name == '') {
    	alert("Empty name not allowed!");
    	return;
    }
    
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (var i = 0; i < names.length; i++) {
                    list = list + '<li>' + names[i] + '</li>';
                }
                var unorderedList = document.getElementById('nameList');
                unorderedList.innerHTML = list;
            }
        }
    };
    
    // make the request
    request.open('GET', '/submit-name?name=' + name, true);
    request.send(null);
};
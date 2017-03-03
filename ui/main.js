var button = document.getElementById("counter");

button.onclick = function() {
    // create request var
    var request = new XMLHttpRequest();
    
    // capture response and set it on the page
    request.onreadystatechange = function() {
        if (request.readystate === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    };
    
    // make the request
    request.open('GET', 'http://saumil-jain.imad.hasura-app.io/counter', true);
    request.send(null);    
};

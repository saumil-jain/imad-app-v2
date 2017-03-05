var submitButton = document.getElementById('submit_comment');

submitButton.onclick = function() {
    // create the request variable
    var request = new XMLHttpRequest();

    var commentTextArea = document.getElementById('comment_box');
    var comment = commentTextArea.value;

    // empty comment validation
    if (comment.trim() == '') {
        alert('Comment can\'t be empty');
        return;
    }

    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                // process the response
                var comments = request.responseText;
                comments = JSON.parse(comments);
                var list = '';
                for (var i = 0; i < comments.length; i++) {
                    list = list + '<li>' + comments[i] + '</li>';
                }
                var commentList = document.getElementById('comment_list');
                commentList.innerHTML = list;
            }
        }
    };

    request.open('GET', '/submit-comment?comment=' + comment, true);
    request.send(null);

};

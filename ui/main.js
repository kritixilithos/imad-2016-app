//Counter button code
var button = document.getElementById("counter");


button.onclick = function() {
    
    //create request object
    var request = XMLHttpRequest();
    
    //Capture request and store in var
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if(request.status === 200) {
                var counter = request.responsetext;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    };
    
    //make the request
    request.open('GET', 'http://kritixilithos.imad.hasura-app.io/counter', true);
    request.send(null);
};
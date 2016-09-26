//Counter button code
var button = document.getElementById("button");
var counter = 0;

button.onClick = function() {
    
    
    counter++;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
};
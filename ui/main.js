//Counter button code
var button = document.getElementById("counter");
var counter = 0;

button.onClick = function() {
    console.log("sd");
    
    counter++;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
};
console.log('Loaded!');
var c = document.getElementById("myCanvas");
c.width=window.outerWidth;
c.height=window.outerHeight;
var ctx = c.getContext("2d");
// Create gradient
var grd = ctx.createLinearGradient(0,0,0,c.height);
grd.addColorStop(0,"cyan");
grd.addColorStop(1,"#8888ff");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,c.width,c.height);
console.log(c.height);

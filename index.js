var color = ["red", "orange", "yellow","green", "lightblue", "blue", "gray", "white", "pink"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function randomColorNumber() {
//Random Colors
var Div1 = color[Math.floor(Math.random()*color.length)];
document.getElementById("div1").style.backgroundColor = Div1;
var Div2 = color[Math.floor(Math.random()*color.length)];
document.getElementById("div2").style.backgroundColor = Div2;
var Div3 = color[Math.floor(Math.random()*color.length)];
document.getElementById("div3").style.backgroundColor = Div3;
var Div4 = color[Math.floor(Math.random()*color.length)];
document.getElementById("div4").style.backgroundColor = Div4;
var Div5 = color[Math.floor(Math.random()*color.length)];
document.getElementById("div5").style.backgroundColor = Div5;
var Div6 = color[Math.floor(Math.random()*color.length)];
document.getElementById("div6").style.backgroundColor = Div6;
var Div7 = color[Math.floor(Math.random()*color.length)];
document.getElementById("div7").style.backgroundColor = Div7;
var Div8 = color[Math.floor(Math.random()*color.length)];
document.getElementById("div8").style.backgroundColor = Div8;
var Div9 = color[Math.floor(Math.random()*color.length)];
document.getElementById("div9").style.backgroundColor = Div9;

//Random Numbers
var S1 = number[Math.floor(Math.random()*number.length)];
document.getElementById("s1").innerHTML = S1;
var S2 = number[Math.floor(Math.random()*number.length)];
document.getElementById("s2").innerHTML = S2;
var S3 = number[Math.floor(Math.random()*number.length)];
document.getElementById("s3").innerHTML = S3;
var S4 = number[Math.floor(Math.random()*number.length)];
document.getElementById("s4").innerHTML = S4;
var S5 = number[Math.floor(Math.random()*number.length)];
document.getElementById("s5").innerHTML = S5;
var S6 = number[Math.floor(Math.random()*number.length)];
document.getElementById("s6").innerHTML = S6;
var S7 = number[Math.floor(Math.random()*number.length)];
document.getElementById("s7").innerHTML = S7;
var S8 = number[Math.floor(Math.random()*number.length)];
document.getElementById("s8").innerHTML = S8;
var S9 = number[Math.floor(Math.random()*number.length)];
document.getElementById("s9").innerHTML = S9;

}

function randomNumbers() {
  //Random Numbers
  var S1 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s1").innerHTML = S1;
  var S2 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s2").innerHTML = S2;
  var S3 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s3").innerHTML = S3;
  var S4 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s4").innerHTML = S4;
  var S5 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s5").innerHTML = S5;
  var S6 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s6").innerHTML = S6;
  var S7 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s7").innerHTML = S7;
  var S8 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s8").innerHTML = S8;
  var S9 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s9").innerHTML = S9;
}

document.getElementById("s1").addEventListener("mouseover", function(){
  document.getElementById("s1").style.visibility = "hidden";
})

document.getElementById("s2").addEventListener("mouseover", function(){
  document.getElementById("s2").style.visibility = "hidden";
})

document.getElementById("s2").addEventListener("mouseover", function(){
  document.getElementById("s2").style.visibility = "hidden";
})
document.getElementById("s3").addEventListener("mouseover", function(){
  document.getElementById("s3").style.visibility = "hidden";
})
document.getElementById("s4").addEventListener("mouseover", function(){
  document.getElementById("s4").style.visibility = "hidden";
})
document.getElementById("s5").addEventListener("mouseover", function(){
  document.getElementById("s5").style.visibility = "hidden";
})
document.getElementById("s6").addEventListener("mouseover", function(){
  document.getElementById("s6").style.visibility = "hidden";
})
document.getElementById("s7").addEventListener("mouseover", function(){
  document.getElementById("s7").style.visibility = "hidden";
})
document.getElementById("s8").addEventListener("mouseover", function(){
  document.getElementById("s8").style.visibility = "hidden";
})
document.getElementById("s9").addEventListener("mouseover", function(){
  document.getElementById("s9").style.visibility = "hidden";
})
function alertAfterHovering() {
alert(document.getElementById("s1").innerHTML+" "+document.getElementById("s2").innerHTML+" "+document.getElementById("s3").innerHTML+" "+document.getElementById("s4").innerHTML+" "+document.getElementById("s5").innerHTML+" "+document.getElementById("s6").innerHTML+" "+document.getElementById("s7").innerHTML+" "+document.getElementById("s8").innerHTML+" "+document.getElementById("s9").innerHTML)
}

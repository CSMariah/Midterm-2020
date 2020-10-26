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
var squares = document.getElementsByClassName("square");

for (square of squares) {
  square.addEventListener("mouseover", addNumber);
}
var total = [];
function addNumber(e) {
  if(e.target.textContent) {
    total.push(e.target.textContent);
    e.target.textContent = "";
    if(total.length === squares.length) {
     alert("The order in which the numbers disappeared is: "+ total);
    }
  }
}

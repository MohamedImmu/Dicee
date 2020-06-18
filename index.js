var button = document.querySelector("button")
button.addEventListener("click", toss);
var music = document.getElementById("myAudio");


function toss(){
music.play();

var n1 = Math.random();
var randomNumber1 = Math.ceil(n1*6);
var n2 = Math.random();
var randomNumber2 = Math.ceil(n2*6);
var leftImg = ("images/dice" + randomNumber1 + ".png");
document.querySelector(".img1").setAttribute("src",leftImg);
var rightImg = ("images/dice" + randomNumber2 + ".png");
document.querySelector(".img2").setAttribute("src",rightImg);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent = "Player1 Wins";
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").textContent = "Player2 Wins";
}
else if (randomNumber1===randomNumber2) {
  document.querySelector("h1").textContent = "Draw";
}
document.querySelector(".res").textContent="Retry";
}

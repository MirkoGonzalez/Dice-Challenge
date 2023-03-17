window.onload = function() {
  imagen1();
  imagen2();
  win();
};

var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

function imagen1 () {
    document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
};

function imagen2 () {
  document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");
};

function win () {
  if (randomNumber1 > randomNumber2){
    document.querySelector("h1"). textContent =  "🚩Player 1 Wins!";
    document.querySelector("h1").classList.add("left")
  } else if (randomNumber1 < randomNumber2){
    document.querySelector("h1"). textContent =  "Player 2 Wins!🚩";
    document.querySelector("h1").classList.add("right")
  } else{
    document.querySelector("h1"). textContent =  "Tie!";
  }
}
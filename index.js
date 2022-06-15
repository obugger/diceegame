var num1 = Math.floor(Math.random() * 6) + 1; //Number is now in range of 1-6.
var diceImage1 = "images/dice" + num1 + ".png";
var dice1 = document.querySelectorAll("img")[0].setAttribute("src", diceImage1);

var num2 = Math.floor(Math.random() * 6) + 1;
var diceImage2 = "images/dice" + num2 + ".png";
var dice2 = document.querySelectorAll("img")[1].setAttribute("src", diceImage2);

if (num1 > num2) {
  document.querySelector("h1").innerHTML= "🚩Player One Wins!";
}
else if (num1 === num2) {
  document.querySelector("h1").innerHTML= "Draw.";
}
else {
  document.querySelector("h1").innerHTML= "Player Two Wins!🚩";
}

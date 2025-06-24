//Step 1 - Create an External Javascript File
//Step 2 - Add Dice Images
//Step 3 - Create a Random Number
var randomNumber1 = Math.floor(Math.random()*6)+1;

//Step 4 - Change the <img> to a Random Dice
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");

//Step 5 - Change both <img> Elements
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");

//Step 6 - Change the Title to Display a Winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2> randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";

}

//Not needed, we can concise it more
//var random1= "./images/dice"+ randomNumber1 +".png";
//console.log(random1);

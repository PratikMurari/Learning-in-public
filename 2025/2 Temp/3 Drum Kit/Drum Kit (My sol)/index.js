//why we don't add paranthesis to the function name in dom
//coz, Now if we had the parentheses here, then this is a straight-up method call,
//and it will call that method straight away when it's adding the event listener.
//Now that's not what we want to happen. We don't want this function to trigger as soon as the event listener is added, right?
//No, we want it to trigger when the click happens. So in that case, instead of calling our function as we would with the parentheses we're passing in the
//name of the function as an input. So that means that we're waiting for this click event to happen before we call the handleClick function.
//And this is a bit of a logical jump that you'll have to make in order to understand a lot of things in JavaScript.
//It's the idea of passing a function as an input so that it can be called at a later time.

var drumLength = document.querySelectorAll(".drum").length;

// Detecting button press
for (var i = 0; i < drumLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

// Detecting keyboard press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//Plays the sound based on the key pressed or button clicked
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log("You pressed:", keyPressed);
  }
}




// Adding animation to the button pressed
function buttonAnimation(currentKey) {
  //document.querySelector("."+currentKey) this selects the class & classList.add("pressed"); addes "pressed" class to the seleted class
  document.querySelector("." + currentKey).classList.add("pressed");
  //setTimeout is a function that takes two arguments, a function and a time in milliseconds
  setTimeout(function () {
    //document.querySelector("."+currentKey) this selects the class & classList.remove("pressed"); removes "pressed" class to the seleted class
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);
}

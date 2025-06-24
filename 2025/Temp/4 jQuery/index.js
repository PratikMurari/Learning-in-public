//module 1
//$("h1").css("color","red");

//module 2
//🔹 In vanilla Js
//select ONE element:
document.querySelector("h1");
//To select ALL matching elements
document.querySelectorAll("button");
//🔹 In jQuery
//To select ONE or ALL elements:
$("h1"); // Selects all <h1> elements
$(".title"); // Selects all elements with class 'title'
$("#header"); // Selects the element with id 'header'
$("div h1"); // Selects <h1> inside <div>
$("button"); // Selects ALL buttons

//module 3
$("h1").addClass("big-titles margin-50");

//module 4
//text() method read everything inside the "" as text
$("h1").text("bye");
//html() method read everything inside the "" as HTML
$("button").html("<em>Hello</em>");

//module 5
//Gets the value of the attribute
console.log($("a").attr("href"));
//Sets the value of the attribute
$("a").attr("href", "https://www.yahoo.com");

//module 6
//event listner(click function) for single element
$("h1").click(function () {
  $("h1").css("color", "purple");
});
//event listner(click function) for multiple elements, no loop needed!
$("button").click(function () {
  $("h1").css("color", "purple");
});
//if you want to make the button to make it go to original color(by me)
let isPurple = false;
$("button").click(function () {
  if (isPurple) {
    $("h1").css("color", "yellow"); // or whatever the original color is
  } else {
    $("h1").css("color", "purple");
  }
  isPurple = !isPurple;
});
//taking input
$("input").keypress(function (event) {
  console.log(event.key);
});
//taking input and changing the text
$("input").keypress(function (event) {
  $("h1").text(event.key);
});
$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});
//resourses
//https://developer.mozilla.org/en-US/docs/Web/Events
//https://www.w3schools.com/jquery/

//module 7
$("h1").before("<button>new</button>"); //Outside, before opening tag
$("h1").after("<button>new</button>"); //Outside, after closing tag
$("h1").prepend("<button>new</button>"); //Inside, before the content
$("h1").append("<button>new</button>"); //Inside, after the content

//to remove
//$("button").remove(); //removes all buttons

//module 8
$("button").on("click", function () {
  //$("h1").hide();         //button click to hide
  //$("h1").show();         //button click to show
  //$("h1").toggle();       //button click to toggle
  //$("h1").fadeOut();      //button click to fade out
  //$("h1").fadeIn();       //button click to fade in
  //$("h1").fadeToggle();   //button click to fade toggle
  //$("h1").slideUp();      //button click to slide up
  //$("h1").slideDown();    //button click to slide down
  //$("h1").slideToggle();  //button click to slide toggle
  //$("h1").stop();         //stop the animation
  //$("h1").animate({opacity:0.5}); //animate the opacity
  $("h1").animate({ opacity: 0.5 }, 1000); //animate the opacity with duration
});

//resourses: https://www.w3schools.com/jquery/jquery_ref_effects.asp

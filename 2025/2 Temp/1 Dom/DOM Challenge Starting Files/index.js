//document.query

//My og way by adding an id
document.getElementById("Third").innerHTML="Hello";

//My way after revision
document.querySelector("ul").lastElementChild.innerHTML="Ram";

//Angela way
document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Pratik";


//Next Challenge: change the color of the first li anchor tag to red
//My way
document.querySelectorAll("li a")[0].style.color="red";

//Angela way
document.querySelector("li a").style.color="red";


//Very Imp Link
//https://www.w3schools.com/jsref/dom_obj_style.asp

//New Challenge: Change the Backgound color of the button to yellow
document.querySelector("button").style.backgroundColor = "yellow";


//New lec 119, Speration of Concerns
//to see Classes applied to the selected element use this property
//document.querySelector("h1").classList
//to add a class to the selected element use this method
document.querySelector("h1").classList.add("huge")

//New lec 120: Text Manipulation and the Text Content Property
//innerHTML gives us the whole html inside the selected element
//textContent gives us the text inside the selected element
//So if we want to chagne inner text as well as inner html we can use innerHTML 
document.querySelectorAll("ul li")[1].innerHTML="<em>Strong</em>";


//New lec 121: Manipulating HTML Element Attributes
//we select anchor tag by
document.querySelector("a");
//then this is how we can get all the attributes of the selected element
document.querySelector("a").attributes;
//now to get the value of a specific attribute we can use this
document.querySelector("a").getAttribute("href");
//now to set the value of a specific attribute we can use this
document.querySelector("a").setAttribute("href","https://www.bing.com/");
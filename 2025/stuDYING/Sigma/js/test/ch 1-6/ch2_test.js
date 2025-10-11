//Chapter 1 - Q1
let age = 8;

if (10<age && age<20){
    console.log("Yes, the person age lies between 10 & 20.");
}
else{
    console.log("Nope, the person age does not lies between 10 & 20.");
}


//Chapter 1 - Q2
switch (age){
    case 7:
        console.log("your age is 7");
        break
    case 8:
        console.log("your age is 8");
        break
    case 9:
        console.log("your age is 9");
        break
    case 10:
        console.log("your age is 10");
        break
    default:
        console.log("you are too cool for this shit");
}


//Chapter 1 - Q3
let a = 6;
if (a%2==0 && a%3==0){
    console.log("yes, it is divicible by both 2 & 3.");
}
else{
    console.log("Nope, it is not divicible by both 2 & 3.");
}


//Chapter 1 - Q4
let b = 6;
if (a%2==0 || a%3==0){
    console.log("yes, it is divicible by 2 0r 3.");
}
else{
    console.log("Nope, it is not divicible by 2 or 3.");
}


//Chapter 1 - Q5
{
let age = 19;
let x=age>18 ? console.log("Yes, you can drive"): console.log("Nope, you can not drive")
}
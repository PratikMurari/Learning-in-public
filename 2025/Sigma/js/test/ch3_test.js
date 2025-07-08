//Chapter 3 - Q1
let obj = {
    harry: 98,
    rohan: 70,
    aakash: 7,
}

//Chapter 3 - Q2
for (const key in obj) {
        const element = obj[key];
        console.log("The marks of "+key+ " are",  element);
}

//Chapter 3 - Q3
correctNumber = 6;
let i = prompt ("enter a number: ");
while (i != correctNumber) {
    console.log("Try Again");
}
console.log("You have entered a correct number");


//Chapter 3 - Q4
function mean (a,s,d,f,g) {
    return (a+s+d+f+g)/5
}
console.log(mean(1,2,3,4,5));
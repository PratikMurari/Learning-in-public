//Array.push() add elements to the end of an array
//Array.pop() remove elements from the end of an array
//Array.unshift() add elements to the beginning of an array
//Array.shift() remove elements from the beginning of an array

//challege build a fizz buzz game
var output = [];
var count = 1;

function fizzbuzz(){
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("fizzbuzz");
    } else if (count % 3 === 0) {
        output.push("fizz");
    } else if (count % 5 === 0) {
        output.push("buzz");
    } else {
        output.push(count);
    }
    count++;
    console.log(output);
}




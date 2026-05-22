<?php
// Logical operators = combine conditional statements

// && = True if both conditions are true            // And Operator
// || = True if at least one condition is true      // Or Operator
// ! = True if false. False if true.                // Not Operator

// Example usage:
// if(condition1 && condition2)
// if(condition1 || condition2)
// if(!condition1)


// exercise 1
// && Operator
$age = 60;
$citizen = true;
if($age >= 18 && $citizen){
    echo"You can vote";
}
else{
    echo"You cannot vote";
}

// exercise 2
// || Operator 
$temperature = 200;
if ($temperature < 0 || $temperature > 35){
    echo "The weather is BAD <br>";
}
else{
    echo "The weather is GOOD <br>";
}

// exercise 3
// ! operator
$cloudy = true;
if (!$cloudy){
    echo "It's Sunny <br>";
}
else{
    echo "It's Cloudy <br>";
}
?>


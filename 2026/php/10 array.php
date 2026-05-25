<?php
    //  array = is a variable that can hold more than one value at a time

    $fruits = array ("apple", "orange", "bananna", "chikoo");

    //this is how you generally echo an element of an array but what if we have 1000 elements in the array 
    // then we have to write 1000 echo statements which is not a good idea so we use loops to do that
    // echo $fruits [0] . "<br>";
    // echo $fruits [1] . "<br>";
    // echo $fruits [2] . "<br>";
    // echo $fruits [3] . "<br>";

    // adding an element to the array
    $fruits [0] = "pineapple";

    // push function add an element to the end of the array
    array_push($fruits, "grapes", "watermelon", "coconut");

    // pop function removes the last element of the array
    array_pop($fruits);

    // shift function removes the first element of the array
    array_shift($fruits);

    // unshift function adds an element to the beginning of the array
    array_unshift($fruits, "strawberry");

    // count function returns the number of elements in the array
    echo count($fruits) . "<br>";

    // reverse function reverses the order of the elements in the array
    $reversedFruits = array_reverse($fruits);

    //  this is how we can use a loop to echo all the elements of an array
    foreach ($fruits as $fruit){
        echo $fruit . "<br>";
    }

    // echo the reversed array
    foreach ($reversedFruits as $fruit){
        echo $fruit . "<br>";
    }
?>
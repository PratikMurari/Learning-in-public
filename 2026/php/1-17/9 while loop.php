<?php
 
    // while loop= do some code infinite while 
    //             some condition remains true
    

    // format: 
    // while (condition){
    //     code to be executed
    // }

    // since it doesn't have an initialization statement
    // or an increment/decrement statement, you have to
    // make sure to include those in the code to be executed
    // initialize a counter before the loop and then 
    // increment/decrement it in the code to be executed
    
    
    // Baisc example (usually problems like this 
    //               prefer for loops but this is 
    //               just to show how while loops work)
    $counter =0 ;
    while ($counter < 10){
        $counter++;
        echo "$counter <br>";
    }
?>
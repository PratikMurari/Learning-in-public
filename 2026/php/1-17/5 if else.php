<?php
    // if else using relational operators
    echo "Case 1: <br>";
    $age = -5;
    if ($age >= 100){
        echo "You are too old to enter this site <br> <br>";
    }
    else if($age >= 18){
        echo "You may enter this site <br> <br>";
    }
    else if($age <= 0){
        echo "That wasn't a valid age <br> <br>";
    }
    else {
        echo "You must be 18+ to enter <br> <br>";
    }

    // if else using boolean variable
    echo "Case 2: <br>";
    $adult = true;
    if ($adult){
        echo "You may enter this site <br> <br>";
    }
    else {
        echo "You must be 18+ to enter <br> <br>";
    }
?>
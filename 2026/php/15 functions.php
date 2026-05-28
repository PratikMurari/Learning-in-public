<?php
    // function = write some code once, reuse when you need it.

    // Syntax:
    // function name() {
    //     code to be executed;
    // }
    
    function  happyBirthday($name, $age){              // name and age are parameters, they are variables that are used in the function
        echo "Happy Birthday to you <br>";
        echo "Happy Birthday to you <br>";
        echo "Happy Birthday dear {$name} <br>";
        echo "Happy Birthday to you, Yay!!! <br><br>";

        echo "Congrats! You are {$age} now <br><br><br><br>";
    }

    happyBirthday("John", 21);                      // John is an argument, it is a value that is passed to the function
    happyBirthday("shane", 21);
?>
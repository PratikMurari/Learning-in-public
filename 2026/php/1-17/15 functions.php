<?php
    // function = write some code once, reuse when you need it.

    // Syntax:
    // function name() {
    //     code to be executed;
    // }
    
    // Example function 1
    function  happyBirthday($name, $age){    // name and age are parameters, they are variables that are used in the function
        echo "Happy Birthday to you <br>";
        echo "Happy Birthday to you <br>";
        echo "Happy Birthday dear {$name} <br>";
        echo "Happy Birthday to you, Yay!!! <br><br>";

        echo "Congrats! You are {$age} now <br><br><br><br>";
    }

    happyBirthday("John", 21);              // John & 21 is an argument, it is a value that is passed to the function
    happyBirthday("shane", 21);

    // Example function 2
    function hypotenus(float $a,int $b){    //you can also specify the type of the parameters, it is optional but it is a good practice to do so
        return sqrt($a ** 2 + $b ** 2);
    }

    echo hypotenus(3, 4);
?>
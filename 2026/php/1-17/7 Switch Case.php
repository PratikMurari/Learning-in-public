<?php
    // Swtich = replace
    $grade= "D";
    switch ($grade){
        case "A":
            echo "you did great <br>";
            break;
        case "B":
            echo "you did good <br>";
            break;
        case "C":
            echo "you did okay <br>";
            break;
        case "D":
            echo "you did poorly <br>";
            break;
        case "E":
            echo "you did very poorly <br>";
            break;
        case "F":
            echo "you failed <br>";
            break;
        default: 
            echo "invalid grade <br>";
    }

    $Day= "Monday";
    switch ($Day){
        case "Monday":
            echo "I hate Monday <br>";
            break;
        case "Tuesday":
            echo "Taco Tuesday <br>";
            break;
        case "wednesday":
            echo "The work is half over <br>";
            break;
        case "Thursday":
            echo "Stay strong soldier <br>";
            break;
        case "Friday":
            echo "Weekend is almost here <br>";
            break;
        case "Saturday":
            echo "Time to party <br>";
            break;
        case "Sunday":
            echo "we relax <br>";
            break;
    }
?>
<?php
    // Swtich = replace
    $grade= "D";
    switch ($grade){
        case "A":
            echo "you did great";
            break;
        case "B":
            echo "you did good";
            break;
        case "C":
            echo "you did okay";
            break;
        case "D":
            echo "you did poorly";
            break;
        case "E":
            echo "you did very poorly";
            break;
        case "F":
            echo "you failed";
            break;
        default: 
            echo "invalid grade";
    }
?>
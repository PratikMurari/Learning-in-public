<?php
    //  isset() = Returns "TRUE" if a variable is declared and not null
    //  empty() = Returns "TRUE" if a variable is not declared, false, "", null

    echo "for isset() <br>";
    echo isset($username) . "<br>"; // 0 (nothing will appear)
    $username = "Pratik";
    echo isset($username) . "<br>"; // 1
    $username = null;
    echo isset($username) . "<br>"; // 0 (nothing will appear)
    $username = true;
    echo isset($username) . "<br>"; // 1
    $username = false;
    echo isset($username) . "<br> <br>"; // 1

    echo "for empty() <br>";
    echo empty($new_username) . "<br>"; // 1
    $username = "Pratik";
    echo empty($username) . "<br>"; // 0 (nothing will appear)
    $username = null;
    echo empty($username) . "<br>"; // 1
    $username = true;
    echo empty($username) . "<br>"; // 0 (nothing will appear)
    $username = false;
    echo empty($username) . "<br> <br>"; // 1

    $username = "Pratik";
    // other variable values we tried were null, true, false, ""
    if (isset($username)) {
        echo "Username is set <br>";
    } else {
        echo "Username is not set <br>";
    }

    $username = "Pratik";
    // other variable values we tried were null, false, "", "pratik"
    if (empty($username)) {
        echo "Username is empty <br>";
    } else {
        echo "Username is not empty <br>";
    }
?>
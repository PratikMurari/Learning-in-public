<?php 
    // Variables in PHP
    // string, integer, float, boolean, array, object, null
    $name = "Pratik"; // string
    $age = 25; // integer
    $money = 10;
    $height = 5.10; // float
    $is_student = true; // boolean
    $hobbies = array("coding", "reading", "traveling"); // array
    $person = (object) [
        "name" => "Pratik",
        "age" => 25,
        "height" => 5.10
    ]; // object
    $null_variable = null; // null

    // Output the variables
    echo "Name: " . $name . "<br>";
    echo "Age: " . $age . "<br>";
    echo "Height: " . $height . "<br>";
    echo "Is Student: " . ($is_student ? "Yes" : "No") . "<br>";
    echo "Hobbies: " . implode(", ", $hobbies) . "<br>";
    echo "Person Name: " . $person->name . "<br>";
    echo "Null Variable: " . var_export($null_variable, true) . "<br>";
    echo "Money he pays for the software: \$($money)<br>";
    // \$ is used to escape the $ sign in the output
?>
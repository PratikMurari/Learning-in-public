<?php
    // associative array = An array made of key=>value pairs

    // countries => capitals
    // ids => username
    // item => price

    $capitals = array (
        "India" => "New Delhi",
        "USA" => "Washington DC",
        "UK" => "London",
        "France" => "Paris",
        "Japan" => "Kyoto",
    );

    $capitals ["Japan"] = "Tokyo";             // changing the value of an existing key
    $capitals ["China"] = "Beijing";           // adding a new key=>value pair to the array
    array_pop($capitals);                      // removes the last element of the array
    array_shift($capitals);                    // removes the first element of the array
    $keys = array_keys($capitals);             // returns an array of all the keys in the array
    $values = array_values($capitals);         // returns an array of all the values in the array
    $capitals = array_reverse($capitals);      // reverses the order of the elements in the array
    $capitals = array_flip($capitals);         // flips the keys and values of the array
    echo count($capitals);                     // returns the number of elements in the array

    foreach ($capitals as $country => $capital){
        echo "The capital of " . $country . " is " . $capital . "<br>";
    }


?>
<?php
    $username = "John Doe";
    $arrayUsername = array("John", "Doe", "Smith");
    $phone = "123-456-7890";

    // $username = strtolower($username);                               // Convert to lowercase
    // $username = strtoupper($username);                               // Convert to uppercase
    // $username = trim($username);                                     // Remove whitespace from the beginning and end
    // $username = str_pad($username, 20, "*");                         // Pad the string to a total length of 20 with "*"
    // $username = str_replace(" ", "_", $username);                    // Replace spaces with underscores
    // $phone = str_replace("-", "", $phone);                           // Remove dashes from the phone number
    // $username = strrev($username);                                   // Reverse the username string
    // $username = str_shuffle($username);                              // Shuffle the characters in the username string
    // $username = strcmp($username, "John Doe");                       // Compare the username with a string
    // $count = strlen($username);                                      // Get the length of the username string
    // $count = strpos($phone, "-");                                    // Find the position of the first dash in the phone number
    // $firstName = substr($username, 0, strpos($username, "_"));       // Get the first name from the username
    // $lastName = substr($username, strpos($username, "_") + 1);       // Get the last name from the username
    // $fullname = explode(" ", $username);                             // Split the username into an array of names
    // $arrayUsername = implode("-", $arrayUsername);                   // Join the array of names into a string with dashes

    // $username = str_repeat($username, 3);                            // Repeat the username string 3 times
    // $username = str_replace("John", "Jane", $username);              // Replace "John" with "Jane" in the username
    // $username = substr($username, 0, 10);                            // Get the first 10 characters of the username


    // for fullname array
    // foreach($fullname as $name) {
    //     echo $name . "<br>"; // Output each name in the fullname array
    // }
    
    echo $username;           // Output the modified username
    echo $phone;              // Output the modified phone number
    // echo $count;              // Output the count variable
    // echo $firstName;          // Output the first name
    // echo $lastName;           // Output the last name
    // echo $arrayUsername;      // Output the modified array of names
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sanitize Input</title>
</head>
<body>
    <form action="17.1 sanatize input.php" method="post"> 
        Username: <br>
        <input type="text" name="username"><br>
        Age: <br>
        <input type="text" name="age"><br>
        Email: <br>
        <input type="text" name="email"><br>
        <input type="submit" name= "login" valume="login"><br>
    </form>
</body>
</html>

<?php
    if (isset($_POST["login"])){

        // Sanitize the username input to remove special characters
        $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);

        // Sanitize the age input to remove any non-numeric characters    
        $age = filter_input(INPUT_POST, "age", FILTER_SANITIZE_NUMBER_INT);

        // Sanitize the email input to remove any invalid characters
        $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);

        echo "Hello, {$username}!<br>";
        echo "You are {$age} years old.<br>";
        echo "Your email is: {$email}";
    }
?>

<!-- Sanatize input is the process of cleaning and filtering user input to ensure that it is safe and does not contain any harmful or malicious content. 
In this code, we are using the filter_input function to sanitize the username, age, and email inputs from the form. 
The FILTER_SANITIZE_SPECIAL_CHARS filter removes any special characters from the username input, 
the FILTER_SANITIZE_NUMBER_INT filter removes any non-numeric characters from the age input, 
and the FILTER_SANITIZE_EMAIL filter removes any invalid characters from the email input. 
This helps to prevent security vulnerabilities such as cross-site scripting (XSS) and SQL injection attacks. -->
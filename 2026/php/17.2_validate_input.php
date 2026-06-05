<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validate Input</title>
</head>
<body>
    <form action="17.2_validate_input.php" method="post"> 
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
        $age = filter_input(INPUT_POST, "age", FILTER_VALIDATE_INT);
        $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);

        if (empty($age)){
            echo "Please enter a valid age.";
        } else {
            echo "Your age is: " . $age;
        }

        if (empty($email)){
            echo "Please enter a valid email.";
        } else {
            echo "Your email is: " . $email;
        }
    }

?>

<!-- Validate input is the process of checking user input to ensure that it meets certain criteria or rules.
 Sanatize input is the process of cleaning and filtering user input to ensure that it is safe and does not contain any harmful or malicious content.
 on the other hand if it doesn't meet the criteria it will be rejected (it returns empty string) and the user will be prompted to enter valid input. -->
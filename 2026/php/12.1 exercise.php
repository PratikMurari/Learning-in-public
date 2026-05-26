<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise</title>
</head>
<body>
    <form action="12.1 exercise.php" method="post">
        <label>Username:</label> <br>
        <input type="text" name="username"><br><br>
        <label>Password:</label><br>
        <input type="password" name="password"><br><br>
        <input type="submit" name="login" value="Log in"><br>
    </form>
</body>
</html>

<?php

    if(isset($_POST["login"])){

        $username = $_POST["username"];
        $password = $_POST["password"];

        if (empty($username)){
            echo "Username is required";
        }
        elseif (empty($password)){
            echo "Password is required";
        }
        else {
            echo "Hello, {$username}";
        }
    }
?>
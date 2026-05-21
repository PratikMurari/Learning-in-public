<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4.1 exercise</title>
</head>
<body>
    <form method="post">
        <label> radius </label>
        <input type="text" name="r">
        <input type="submit" value="circumference">
    </form>
</body>
</html>

<?php 
    $r = $_POST["r"];
    $circumference = null;
    $circumference = 2 * pi() * $r;
    $circumference = round($circumference, 2);
    
    echo $circumference;
?>
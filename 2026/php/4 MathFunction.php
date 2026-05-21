<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action ="4 MathFunction.php" method="post">
        <label>x</label>
        <input type="text" name="x">
        <input type="submit" value="solution">
        <!-- <input type="submit" value="solution"> -->

    </form>    
</body>
</html>

<?php
    $x = $_POST["x"];
    $solution = null;

    $solution = abs($x);    
    // $solution = round($x);

    echo $solution;
?>
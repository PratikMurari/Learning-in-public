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
        <input type="text" name="x"> <br>
        <label>y</label>
        <input type="text" name="y"> <br>
        <input type="submit" value="solution">

    </form>    
</body>
</html>

<?php
    $x = $_POST["x"];
    $y = $_POST["y"];
    $solution = null;

    // $solution = abs($x);    
    // $solution = round($x);
    // $solution = floor($x);
    // $solution = ceil($x);
    $solution = pow($x, $y);

    echo $solution;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Math Function</title>
</head>
<body>
    <form action ="4 MathFunction.php" method="post">
        <label>x</label>
        <input type="text" name="x"> <br> <br>
        <label>y</label>
        <input type="text" name="y"> <br> <br>
        <label>z</label>
        <input type="text" name="z"> <br> <br>
        <input type="submit" value="solution"> <br>

    </form>    
</body>
</html>

<?php
    $x = $_POST["x"];
    $y = $_POST["y"];
    $z = $_POST["z"];
    $solution = null;

    // $solution = abs($x);             // absolute value makes the number positive    
    // $solution = round($x);           // round to the nearest integer
    // $solution = floor($x);           // round down to the nearest integer
    // $solution = ceil($x);            // round up to the nearest integer
    // $solution = sqrt($x);            // square root of a number
    // $solution = pow($x, $y);         // power function, $x raised to the power of $y
    // $solution = max($x, $y, $z);     // returns the maximum value among the arguments
    // $solution = min($x, $y, $z);     // returns the minimum value among the arguments
    // $solution = pi();                // returns the value of pi  
    // $solution = rand();              // generates a number
    // $solution = rand($x, $y);        // generates a random number between $x and $y
    $solution = rand(1,6);              // generates a random number between 1 and 6 (like a dice roll)

    echo $solution;
?>
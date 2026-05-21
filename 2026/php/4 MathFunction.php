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

    // $solution = abs($x);    
    // $solution = round($x);
    // $solution = floor($x);
    // $solution = ceil($x);
    // $solution = sqrt($x);
    // $solution = pow($x, $y);
    // $solution = max($x, $y, $z);
    // $solution = min($x, $y, $z);
    // $solution = pi();
    $solution = rand();

    echo $solution;
?>
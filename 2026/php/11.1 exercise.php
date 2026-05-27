<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A-Array exercise</title>
</head>
<body>
    <form action="11.1 exercise.php" method="post">
        <label>Enter Country name:</label>
        <input type="text" name="country">
        <input type="submit">
    </form>
</body>
</html>

<?php
    $capitals = array ("India" => "New Delhi",
                        "USA" => "Washington DC",
                        "UK" => "London",
                        "France" => "Paris",
                        "Japan" => "Kyoto",
    );

    $capital= $capitals[$_POST["country"]];
    echo "The capital is {$capital}";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkbox</title>
</head>
<body>
    <form action= "14 checkbox.php" method="post">
        <input type="checkbox" name="food[]" value="Pizza">Pizza <br>
        <input type="checkbox" name="food[]" value="Burger">Burger <br>
        <input type="checkbox" name="food[]" value="Hotdog">Hotdog <br>
        <input type="checkbox" name="food[]" value="Taco">Taco <br>
        <input type="submit" name="submit">
    </form>
</body>
</html>

<?php
    if (isset($_POST["submit"])) {
        $food = $_POST["food"];
            foreach ($food as $item) {
                echo "You would like to have $item <br>";
            }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Radio Button</title>
</head>
<body>
    <form method="post">
        <Label> Choose your mode of payment:</Label><br>
        <input type="radio" name="payment" value="Cash"> Cash <br>
        <input type="radio" name="payment" value="Credit Card"> Credit Card <br>
        <input type="radio" name="payment" value="Debit Card"> Debit Card <br>
        <input type="radio" name="payment" value="Net Banking"> Net Banking <br>
        <input type="submit" name="confirm" value="Confirm"><br><br>
    </form>
</body>
</html>

<?php
    if (isset($_POST["confirm"])){
        if (isset ($_POST["payment"])){
            echo "You have selected: " . $_POST["payment"];
        }
        else {
            echo "Please select a mode of payment.";
        }
    }
?>
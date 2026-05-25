<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stop watch</title>
</head>
<body>
    <form action="9.1 exercise.php" method="post">
        <input type="submit" input="stop" value="stop">
    </form>
</body>
</html>

<?php
    $seconds = 0;
    $running= true;

    while ($running){

        if (isset($_POST["stop"])){
            $running = false;
        }
        else{
        sleep(1);
        $seconds++;
        echo $seconds . "<br>";
        }
    }
?>
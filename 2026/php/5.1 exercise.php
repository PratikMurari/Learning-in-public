<!-- weekly pay calculator for an employee -->
 <?php
    $hour = 50;
    $rate = 15;
    $WeeklyPay= null;

    if ($hour <= 0){
        echo "You made $0 this week.";
    }
    elseif ($hour <= 40){
        $WeeklyPay = $rate * $hour;
        echo "You made $$WeeklyPay this week.";
    }
    else{
        $WeeklyPay = ($rate * 40) + (($hour - 40) * $rate *1.5);
        echo "You made $$WeeklyPay this week.";
    }    
?>
// Challenge
// Bmi Calculator
// where u get different output for different BMI's

function bmiCalculator (weight, height) {
    var bmi = (weight/(height*height));
    if (bmi < 18.5){
        var interpretation = "Your BMI is "+bmi+", so you are underweight.";
    }
    else if (bmi > 18.5 && bmi<24.9){
        interpretation = "Your BMI is "+bmi+", so you have a normal weight.";
    }
    else{
    interpretation = "Your BMI is "+bmi+", so you are overweight.";
    }
    return interpretation;
}

console.log(bmiCalculator (65,1.8));
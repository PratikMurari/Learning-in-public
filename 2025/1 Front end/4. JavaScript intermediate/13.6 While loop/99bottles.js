var i=99;
function bottles(){
    while (i>0){
        var text1= i+ " bottles of beer on the wall,"+i+ " bottles of beer.";
        console.log(text1);
        i--;
        var text2= "Take one down and pass it around, " +i+" bottles of beer on the wall.";
        console.log(text2);
    }
}

bottles()
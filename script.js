//exe1
function palindromNum(num){
    var numLen = 0;
    var tmp1;
    var tmp2;

    tmp1 = 1;
    while (tmp1<=num){ //find the length of num
        numLen++;
        tmp1 *= 10;
    }
    console.log(numLen);
    for (var i = 1, tmp1 = num; i <= (numLen/2)+1 ; i++, tmp1 = num){
        while (tmp1 >= Math.pow(10, i)) //find first digit 
            tmp1 /= 10;
        tmp1 %= 10;

        tmp2 = num % Math.pow(10, i);
        while (tmp2 >= 10)
            tmp2 /= 10;
        if (parseInt(tmp2) != parseInt(tmp1)) //check equalty
            return false;
    }
    return true;
}

//exe2
function validateEmail(str){
    var strudelIndex = str.indexOf("@", 1);
    var dotIndex = str.indexOf(".", strudelIndex+2);
    var len = str.length;

    if (len<5 || strudelIndex == -1 || dotIndex == -1 || (len-dotIndex) <=2)
        return false;
    for (var i = dotIndex+1; i<len ; i++){
        if (str.charAt(i) >= '0' && str.charAt(i) <= '9')
            return false;
    }
    return true;
}

//exe3
// shortCode :)
function printTriangle(num){
    var tmp ="";

    for (var i=0; i<=num; i++,tmp =""){
        for (var k=0; k<i; k++) tmp += "  ";
        for (var j=i; j<num; j++) tmp += "*   ";
        console.log(tmp);
    }
}

//exe4
// support add days more than 30.
function addToDate(oldDate, num){
    var splittedDate = oldDate.split(".");
    var newDay;
    var newMonth;
    var newYear;

    do {
        if (parseInt(splittedDate[0]) + num > 30){
            newDay = (parseInt(splittedDate[0]) + num) - 30;
            newMonth = (parseInt(splittedDate[1]) + 1)
            if (newMonth > 12){
                newMonth -= 12;
                newYear = parseInt(splittedDate[2]) + 1;
            }
            if (newDay>30)
                splittedDate[0] = newDay;
                splittedDate[1] = newMonth;
                splittedDate[2] = newYear;
        }
        else{
            newDay = parseInt(splittedDate[0]) + num;
            newMonth = splittedDate[1];
            newYear = splittedDate[2];
        }
        num = 0;     
    }
    while(newDay>30)
    return (newDay + "." + newMonth + "." + newYear);
}

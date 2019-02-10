function idTest() {
    inputVal = document.getElementById("enterID").value
    if (inputVal.length == 9){
        for (var i = 0; i <= inputVal.length; i++){
            if (!(inputVal.charAt(i) >=0 && inputVal.charAt(i) <= 9)){
                console.log ("has non integer chars")
                return false;
            }

        }
        console.log("ID number verified")
        
    }
    else{
        console.log("ID number must be 9 digits")
        return false
    }
}

function primeNum(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;  
}

/*function preCapSpace(str) {
    for (var i = 0, next = i+1; i <= str.length; i++, next++){
        if (str.charAt(next) >= "A" && str.charAt(next) <= "Z"){
            var firstW = str.slice(0,next);
            var secondW = str.slice(i, str.length);
            str = firstW + " " + secondW;

        }
        console.log(str)
    }
}
preCapSpace("testTestBest")*/
 
var highNum;
var firstNum = true;

function highestNum(){
    var temp = parseInt(document.getElementById("enterNum").value);
    if (firstNum == true && temp >= 0){
        highNum = temp;
        firstNum == false;

    }
    else if (firstNum == true && temp < 0){
        console.log("the highest number is " + highNum)
    }
    else {

    }
}


function boxMaker(){
    var size = parseInt(document.getElementById("enterBoxSize").value)
    var box = ""
    for (var i = 0; i < size; i++){
        box += "*";
    }
    box += "\n"
    for (var i = 0; i < size -2; i++){

        box += "*"
        for (var j = 0; j<size -2; j++){
            box += " "

        }
        box += "*"

        box += "\n"

    }
    for (var i = 0; i < size; i++){
        box += "*";
    }
    console.log(box);
}

function replacer(res){
    var first, last, temp, temp1;
    for (var i = 0; i < res.length-1; i++){
        for (var j = 0; j < res.length-i-1; j++){
            if(res.charAt(j)>res.charAt(j+1)){

                temp = res.charAt(j);
                temp1 = res.charAt(j+1);
                first = res.substring(0,j);
                last = res.substring(j+2, res.length);
                res = first + temp1 + temp + last;
            }

        }
    }
    console.log(res)
}

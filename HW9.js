/* 1 */

function trueIfPalindrmNum(num){
    var flag = true;
    
    for(var firstNum=0 , lastNum=num.length-1; firstNum<num.length/2 ; firstNum++ , lastNum--){
        
        if (!(num.charAt(firstNum)>=0 && num.charAt(firstNum)<=9) && !(num.charAt(lastNum)>=0 && num.charAt(lastNum)<=9)){
            console.log("enter numbers only")  
            flag = false;
            {break;}
        }
                
        else if (num.charAt(firstNum)!= num.charAt(lastNum)){
            console.log("false");
            flag = false;
        }

    }
    if(flag==true){
        console.log("true");
    }    
}


trueIfPalindrmNum("123321")
trueIfPalindrmNum("1233433321")
trueIfPalindrmNum("ABCBA")
trueIfPalindrmNum("12ASAA21")


/* 2 */
function checkValidEmail(){
    var i=0;
    var email = document.getElementById("enterEmail").value;
    var atLoc = email.indexOf("@");
    var dotLoc = email.indexOf(".");
    flag = true;
    
    while (i<email.length){
        if(!(atLoc>=5)){
            flage = false;
            alert ("Enter at least 5 Characters before the @ ")
            console.log("invalid e-mail entered")
            {break;}
        }

        if(!(dotLoc>=atLoc+3)){
            flag = false;
            alert ("Enter at least 2 Characters between the @ & . ")
            console.log("invalid e-mail entered")
            {break;}
        }

        if(!(email.length-dotLoc>2)){
            flag = false;
            alert ("Enter at least 2 letters for the e-mail ending")
            console.log("invalid e-mail entered")
            {break;}
        }
        
       i++
        
        if(flag == true){
        console.log("valid e-mail :" + email)
        }
    }        
}



/* 3 */


function makeTriangle(num){
    
    var str = "";
    
    for (var i=num ; i>0 ; i--){
        str += " * ";              
    }
    str+= "\n"  
    
    
    for (var i=num-1 ; i>0 ; i--){
        
        for(var j=0; j<i; j++){  
        }
        for (k = 0; k < j ; k++) {
        str += " * ";
        }
        str+="\n"  
    }
    console.log(str)  
}
makeTriangle (10)



/* 4 */
function dateCalculate(daysNum,date){

    var DD = date.slice(0,2);
    var ddNum = parseInt(DD)
    var ddRemain = (ddNum-30) + daysNum;
    

    var MM = date.slice (3,5)
    var mmNum = parseInt(MM)
    var mmNumPlus = mmNum + 1;

    var YY = date.slice(6,date.length)
    var yyNum = parseInt(YY)
    var newYear = yyNum+1;
    
    var dotMM = date.slice(2,date.length);
    var dotYY = date.slice(5,date.length);
    

    if (date.length!=10){
        alert("Please enter full date DD.MM.YYYY")
    }

    else if (daysNum + ddNum<=30){
        console.log(ddNum + daysNum + dotMM)
    }

    else if (daysNum + ddNum>30 && mmNumPlus<=12){
        console.log(ddRemain + "." + mmNumPlus + dotYY)
    }

    else if (daysNum + ddNum>30 && mmNumPlus>12){
        console.log(ddRemain + "." + "01." + newYear)
    }

}

dateCalculate(3,"05.12.1988")
dateCalculate(5,"25.05.2001")
dateCalculate(7,"28.11.2009")
dateCalculate(20,"29.12.2005")






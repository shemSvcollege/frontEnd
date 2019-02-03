func("12435");
function func(res){

    
    debugger;
    var first,last,temp,temp1;
    for(var i=0 ; i<res.length-1;i++){
        for(var j=0;j<res.length-i-1;j++){
            if(res.charAt(j)>res.charAt(j+1)){
            
                temp=res.charAt(j);
                temp1=res.charAt(j+1)
                first= res.substring(0,j);
                last = res.substring(j+2,res.length);
                res = first + temp1 + temp + last;


            }
        }
    }
    console.log(res);


}




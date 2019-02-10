var matrix = [[1,2,3,4,5,6,7,8,9],[7,8,9,1,2,3,4,5,6],[4,5,6,7,8,9,1,2,3],[3,1,2,8,4,5,9,6,7],[6,9,7,3,1,2,8,4,5],[8,4,5,6,9,7,3,1,2],[2,3,1,5,7,4,6,9,8],[9,6,8,2,3,1,5,7,4],[5,7,4,9,6,8,2,3,1]]
console.log(matrix);

function level2(){
    //debugger;
    var row,col;
    for(var i=40; i>0; i--){
        row = Math.floor(Math.random()*9-0)+0;
        col = Math.floor(Math.random()*9-0)+0;
        matrix[row][col] = 0;
    }
    debugger;
    for(var j=1,a="a"; j<82; j++,a++){
        if(a>"z"){
            a="a";
            a="a" + a;
        }
        document.getElementById(a)
        
    }
    console.log(this.matrix);
}
level2();

function level1(){
    //debugger;
    var row,col;
    for(var i=20; i>0; i--){
        row = Math.floor(Math.random()*9-0)+0;
        col = Math.floor(Math.random()*9-0)+0;
        matrix[row][col] = 0;
    }
    console.log(this.matrix);
}

function level3(){
    //debugger;
    var row,col;
    for(var i=60; i>0; i--){
        row = Math.floor(Math.random()*9-0)+0;
        col = Math.floor(Math.random()*9-0)+0;
        matrix[row][col] = 0;
    }
    console.log(this.matrix);
}
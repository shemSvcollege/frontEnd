//exe1
function exe1(arr){
    var sum = 0;
    for (var i=0; i<arr.length; i++)
        sum += arr[i];
    return (sum/arr.length);
}

//exe2
function exe2(arr){
    var tmp;
    for (var i=0; i<arr.length;i++)
        for (var j=arr.length-1; j>=(0+i); j--)
            if (arr[j] > arr[j-1]){
                tmp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = tmp;
            }
    return arr;
}

//exe3
function exe3 (arr1, arr2){
    var newArr = [];
    for (var i=0; i<arr1.length; i++)
        if (!(exe3_isNumInsideArray(newArr, arr1[i])))
            for (var j=0; j<arr2.length; j++)
               if (arr1[i] == arr2[j]){
                    newArr.push(arr1[i]);
                    j = arr2.length;
               } 
    return newArr;
}
function exe3_isNumInsideArray(arr, num){
    for (var i=0; i<arr.length; i++)
        if (arr[i] == num)
            return true;
    return false;
}

//exe4
function exe4(mat){
    var counter = 0;
    for (var j=0; j<mat.length; j++)
        for (var i=0; i<mat[j].length; i++)
            if ((mat[j][i] >= 'A') && (mat[j][i] <= 'Z'))
                counter++;
    return counter;
}
//exe5
function exe5 (mat){
    var counter = 0;
    for (var row=0; row<mat.length; row++)
        for (var col=0; col<mat[row].length; col++)
            if (mat [row][col] == 1)
                counter += has1Around(mat, row, col);
    return counter
}
function has1Around(mat, row, col){
    if (row-1 >= 0)
        if (mat[row-1][col] == 1)
            return 0;

    if (row-1 >= 0 && col-1>=0)
        if (mat[row-1][col-1] == 1)
            return 0;

    if (row-1 >=0 && col+1<mat.length)
        if (mat[row-1][col+1] == 1)
            return 0;

    if (col+1<mat.length)
        if (mat[row][col+1] == 1)
            return 0;

    if (col-1>=0)
        if (mat[row][col-1] == 1)
            return 0;

    if (row+1<mat.length && col+1<mat.length)
        if (mat[row+1][col+1] == 1)
            return 0;

    if (row+1<mat.length)
        if (mat[row+1][col] == 1)
            return 0;

    if (row+1<mat.length && col-1>=0)
        if (mat[row+1][col-1] == 1)
            return 0;
    return 1;
}
//var mat = [[1,0,0,1,0,0,0],[0,0,0,0,0,1,0],[0,0,0,0,0,0,0],[1,1,0,1,0,0,1]];
//console.log(exe5(mat));

//exe6
function exe6 (mat){
    for (var row=0; row<mat.length; row++)
        if (isArrayValuesDuplicated(mat[row]))
            return false;
    return true;
}
function isArrayValuesDuplicated(arr){
    //case that the array contains 0 num or string which is forbidden
    for (var i=0; i<arr.length; i++)
        if (!(arr[i]>0 && arr[i]<=9))
            return true;
    //look for duplications
    for (var i=0; i<arr.length;i++)
        for (var j=i; j<arr.length;j++)
            if (arr[i] == arr[j+1])
                return true;
    return false;
}
//var mat = [[1,2,3,4,5,6,7,8,9],[1,2,3,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]];
//console.log(exe6(mat))
function func(arr) {
    var flag = true;
    var sum = 0;
    var mul = 0
    //debugger
    for (k = arr.length - 1; k >= 0; k--) {

        if (arr[k] == 1) {
            sum += Math.pow(1 * 2, mul);
            mul++
        }

        else {
            mul++
        }

    }
    console.log(sum);

    for (i = 0, j = arr.length - 1; i < arr.length / 2; i++ , j--) {

        if (!(arr[i] >= 0 && arr[i] <= 1 || arr[j] >= 0 && arr[j] <= 1)) {

            flag = false;
            break;
        }
        else {

            if (arr[i] != arr[j]) {

                flag = false;
                break;

            }
            else {

                flag = true;

            }
        }
    }
    
    if (flag == true) {
        console.log("paloindrom")
    }
    if (flag == false) {
        console.log("not paloindrom")
    }
}
func([1,1,1])
func([1,0,1,1,0,1])
func([1,0,1,1,0,1,1,1,1])
func([1,0,1,1,0,1,1,0,2])



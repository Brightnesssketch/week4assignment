function dropElements(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[0])) {
            break;

        }else {
            arr.shift()
        }
    }
console.log(arr);
}
 dropElements([9, 10, 11, 12, 13, 14, 15], function(n) {
     return n > 11;
 })
 dropElements([1,2,3,4], function(n) {
     return n > 3;
 })
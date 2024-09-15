//  Complete the 'lonelyinteger' function below The function is expected to return an INTEGER The function accepts INTEGER_ARRAY a as parameter.
// [0, 0, 1, 2, 1]
// Sample Output 2
//

function lonelyinteger(a) {
    // Write your code here
    let result=0;
    for(let i=0; i<a.length; i++){
        result^=a[i]
    }
return result;
}
//XOR operator

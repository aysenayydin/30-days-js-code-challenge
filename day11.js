// Complete the 'counterGame' function below.
// *
// * The function is expected to return a STRING.
// * The function accepts LONG_INTEGER n as parameter.
// */

function counterGame(n) {
   let  step= 0;
   while (n > 1) {
       let powerOfTwo = 1;
       while (powerOfTwo * 2 <= n) {
           powerOfTwo *= 2;
       }
       if (n === powerOfTwo) {
           n /= 2;
       } else {
           n -= powerOfTwo;
       }
       step++;
   }
let result=step% 2 === 0 ? "Richard" : "Louise";
     return result
}

 
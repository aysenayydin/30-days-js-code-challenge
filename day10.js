// Complete the 'maximizingXor' function below.
// *
// * The function is expected to return an INTEGER.
// * The function accepts following parameters:
// *  1. INTEGER l
// *  2. INTEGER r
// */

function maximizingXor(l, r) {
   
   let maxXor=0;
   
   for(let i=l; i<=r; i++){
       for(let j=i; j<=r;j++){
           let xorValue=i^j;
           if(xorValue>maxXor){
               maxXor=xorValue;
           }
       }
   }
return maxXor;
}
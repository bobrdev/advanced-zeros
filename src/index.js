module.exports = function getZerosCount(number, base) {
  function getAllPrimesWithSum(b){

    PrimesObject = {};
    for (let i = 2; i <= b; i++) {
      
      if(b % i == 0){
        if(PrimesObject[i]){
          PrimesObject[i]++;
        }else{
          PrimesObject[i] = 1;
        }
        b /= i;
        i = 1;
      }

    }
    return PrimesObject;
  }

  primes = getAllPrimesWithSum(base);
  arrMaxSumNum = [];
 
  for (const value in primes) {
  
    let num = number;
    let rezult = 0;
    while(num >= value){
      num = Math.floor( num / value );
      rezult += num;
    }
 
    arrMaxSumNum.push( Math.floor( rezult / primes[value]));

  }

  return Math.min.apply(null, arrMaxSumNum);
}
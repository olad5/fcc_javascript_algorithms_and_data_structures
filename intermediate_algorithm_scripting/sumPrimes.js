// Sum All Primes
function sumPrimes(num) {
  let primes  = [];
  // the code block below for finding prime numbers is for this site
  // https://umumble.com/blogs/algorithm/how-to-find-prime-numbers/
  // https://en.wikipedia.org/wiki/Prime_number
  function isprime(n){
    if(n==1) // 1 - not a prime number
      return false;
    // go over the possible divisors from 2 to sqrt (n)
    for(d=2; d*d<=n; d++){
    // if it divides evenly, then the composite
        if(n%d==0)
          return false;
    }
    // if there are no nontrivial divisors, then a simple
    return true;
  }
  for (let i=2;i<=num; i++) {
    if (isprime( i )) {
      primes.push(i);
    }
  }
  let sumTotal  = primes.reduce((acc , currentValue) => { return acc + currentValue}, 0);
  return (sumTotal);
}

// console.log(sumPrimes(10));// return 17
console.log(sumPrimes(977));// return 73156



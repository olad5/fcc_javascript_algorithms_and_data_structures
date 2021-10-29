// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sum-all-odd-fibonacci-numbers/16084
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

console.log(sumFibs(4));// 5
// console.log(sumFibs(1000));// return 1785
// console.log(sumFibs(4000000));// return 4613732
// console.log(sumFibs(75024));// return 60696
// console.log(sumFibs(75025));// return 135721

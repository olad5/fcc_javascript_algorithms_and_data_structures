function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  // this part is to create the array
  const range = Array(max - min + 1).fill(0).map((_, i) => i + min);
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}
console.log(smallestCommons([1,5]));// return 60
// console.log(smallestCommons([1,13]));// return 60
// console.log(smallestCommons([5,1]));// return 60
// console.log(smallestCommons([2,10]));// return 2520
// console.log(smallestCommons([23,18]));// return 6056820

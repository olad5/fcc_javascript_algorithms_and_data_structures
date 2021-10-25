// Sorted Union
function uniteUnique(arr) {
  let newArr = [];
  // this gets all the arrays from the arguments
  for (let n in arguments) {
    let arr  = (arguments[n]);
    for (let n in arr) {
      if (newArr.indexOf(arr[n]) == -1) {
        newArr.push(arr[n]);

      }

    }
  }
  return (newArr);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //[1, 3, 2, 5, 4].
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); //[1, 2, 3, 5]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); //[1, 2, 3, 5, 4, 6, 7, 8]

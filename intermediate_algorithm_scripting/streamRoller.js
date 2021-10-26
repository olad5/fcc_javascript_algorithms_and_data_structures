function steamrollArray(arr) {
  // return arr;
  let  dex = [];
  for( let n in  dex) {
    // console.log(n);
    // console.log(dex[ n ]);
  };
  // for( let n in  arr) {
  //   console.log(arr[n]);
  // };
    return arr.reduce((acc, cV) => acc.concat(cV), []);
  // while an element in the array is an array having something inside, run the function
  // multiple times
}

// console.log(steamrollArray([1, [2], [3, [[4]]]]));// [1, 2, 3, 4]
// console.log(steamrollArray([[["a"]], [["b"]]]));// ["a", "b"].
// console.log(steamrollArray([1, [], [3, [[4]]]]));// [1, {}, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]]));// [1, {}, 3, 4]

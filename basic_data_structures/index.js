function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i=0;i < arr.length;i++) {
    // console.log(arr[i]);
    for (let j=0;j < arr[i].length; j++) {
      // console.log(arr[i][j]);
      let element  = (arr[i][j]);
      // console.log(element);
      if (elem == element) {
        // arr[i] = arr[i].splice(j, 1);
        // arr[i].splice(j, 1);
        // console.log(i);
        arr.splice(i,1);
      }
    }
  }
  newArr = [...arr];

  // Only change code above this line
  return newArr;
}

// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));// should return [[10, 8, 3], [14, 6, 23]]

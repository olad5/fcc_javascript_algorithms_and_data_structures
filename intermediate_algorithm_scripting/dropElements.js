// Drop it
function dropElements(arr, func) {
  let newArr = [...arr];
  for (let n in arr) {
    if (!func( arr[n] )) {
      newArr.shift(arr[n]);
    }
  }
  let newStuff  =arr.map(element => func(element));
  // this is the indexOf of the first true value
  let firstTrueIndex   =(newStuff.indexOf(true));
   if (firstTrueIndex != -1) {
    return (arr.slice(firstTrueIndex));
    
   }
  else {
    return ([]);

  }
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));//[3, 4]
// console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));// [1, 0, 1]
// console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));//[1, 2, 3]
// console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));//[]

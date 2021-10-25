// Sum All Numbers in a RangePassed
function sumAll(arr) {
  let newArr  = [];
  if (arr[0]>arr[1]) {
    [arr[0], arr[1]] =[arr[1], arr[0]] ;
  }
  let i  = arr[0];
  while (i<= arr[1] ) {
    newArr.push((i));
    i++
  }
  return newArr.reduce((acc, currentValue) => 
    acc+currentValue
  ,); 
}

// console.log( sumAll([1, 4]));
// console.log( sumAll([5, 10]));
console.log( sumAll([10, 5]));

// Arguments Optional
function addTogether(x) {
  let newArr  = [];
  for ( let n in arguments) {
    newArr.push(arguments[n]);
  }
  let numArgs  = newArr.length;
  let areArgsNumbers  = newArr.every(function ( currentValue ) {
    return typeof(currentValue) == typeof(2);
  });
  let isFirstANumber  = typeof(newArr[0]) == typeof(2);
  if (numArgs==2 && areArgsNumbers ) {
    return newArr[0]+newArr[1];
  }
  else if (numArgs ==1 && isFirstANumber ) {
    return  y =>  typeof( y ) != typeof(2)? undefined: x+y;
  }
  else {
    return undefined;
  }
}

console.log(addTogether(2,3));// return 5
console.log(addTogether(5)(7));// return 12
console.log(addTogether(23, 30));// return 53
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));// return undefined
console.log(addTogether(2,'3'));// return undefined
console.log(addTogether(2)([3]));// return undefined

//Diff Two Arrays
function diffArray(arr1, arr2) {
  let newArr = [];
  let place  = arr1.concat(arr2);
  for (let word in place) {
    // a list of the two indexes
    let listIndexes = [arr1.indexOf(place[word])   ,arr2.indexOf(place[word])];
    let itemExists = listIndexes.some(function (currentValue){
        return currentValue < 0;
      });
    if (itemExists) {

      newArr.push(place[word])
    }
  }
  return newArr;
}

// console.log( diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log( diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));// return ["pink wool"]




// this is better because they started from the end 
function reverseString(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// let result  = reverseString("hello");
// console.log(result);


function factorialize(num) {
  // base case
  let house =0;
  if (num <=1 ) {
    return 1;
  }
  // recursive call
  else {
    house  = num * factorialize(  num -1);
  }
  return house;
}

// factorialize(0);

// let result  = factorialize(0);
// console.log(result);

function findLongestWordLength(str) {
  let strRegex = /\w+/g;
  // the code below is an array of all the words
  let stuff = str.match(strRegex);
  let count = 0; 
  for (let i = 0; i<stuff.length;i++) {
    if (stuff[i].length > count) {
      count  = stuff[i].length ;
    }
  }
  // return stuff;
  return count;
}

// let result  = findLongestWordLength("The quick brown fox jumped over the lazy dog");  
// console.log(result);
//
//
//
//
//

function largestOfFour(arr) {
  let newArr = [];
  for (let i = 0; i<arr.length;i++) {
    let highest = Math.max(...arr[i]);
    newArr.push(highest);
  }
  // return arr;
  return newArr;
}

// let result  = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //should return an array.
// let result  = largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); 
//should return [27, 5, 39, 1001].
// console.log(result);
//
// get length of the whole string
// get length of the target
// make calculations using the target and whole string to know where to start indexing
// use the substring method
// if found, return true and stuff 

function confirmEnding(str, target) {
  let found= str.substring(str.length - target.length)
  if (found==target) {
    return true;
  }else {
    return false;
  }
  
}
// let result  = confirmEnding("Bastian", "n");//true
// let result  = confirmEnding("Congratulation", "on")//true
// let result  = confirmEnding("Connor", "n")//false
// console.log(result);




function repeatStringNumTimes(str, num) {
  let newStr = '';
  if (num < 1) {
    return '';
  } else {
    for (let i = 0; i<num;i++) {
     // console.log(str); 
     newStr+=str; 
    }
    // return str * num;
    return newStr;
  }
}

// let result  = repeatStringNumTimes("abc", 3); //return abcabcabc
// let result  = repeatStringNumTimes("abc", -2); //return abcabcabc
// console.log(result);


function truncateString(str, num) {
  if (num >= str.length) {
    return str;

  } else {
    let sub = str.substring(0, num)
    return sub + '...';
  }
}

// let result  = truncateString("A-tisket a-tasket A green and yellow basket", 8);
// should return A-tisket....
// let result  = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
// let result  = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
// console.log(result);
//
//

function findElement(arr, func) {
  for (let i = 0; i<arr.length;i++) {
    if (func(arr[i])) {
      return arr[i];
    }

  }
  return undefined;
}
// let result  = findElement([1, 2, 3, 4], num => num % 2 === 0);
// let result  = findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }); //return 8
// console.log(result);
//
//
//
function booWho(bool) {
  switch (bool) {
    case true:
      return true;
    case false:
      return true;
    default:
      return false;
  }
}

// let result  = booWho(null);
// console.log(result);
function titleCase(str) {
  // return str;
  // let strRegex = /\w*\W/g;
  // let strRegex = /[^\s+]/g;
  // return(str.split(' '));
  let strRegex = /\w+/g;
  // the code below is an array of all the words
  // let stuff = str.match(strRegex);
  let stuff  = (str.split(' '));
  let newArr = []; 
  for (let i = 0; i<stuff.length;i++) {
    // this is the first letter uppercased
    // console.log(stuff[i][0].toUpperCase());
    let first = (stuff[i][0].toUpperCase());
    // this is the remaining part of the string
    let second = (stuff[i].slice(1).toLowerCase());

    let fullstring = (first+second);

    newArr.push(fullstring);
  }
  // console.log(newArr.join(' '));
  return (newArr.join(' '));
}

// let result  = titleCase("I'm a little tea pot");// I'm A Little Tea Pot.
// let result  = titleCase("sHoRt AnD sToUt"); // Short And Stout.
// let result  = titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");// Here Is My Handle Here Is My Spout
// console.log(result);
//
//
//


// get all each of elements
// use splice() to add them then see the result
function frankenSplice(arr1, arr2, n) {
  let clone  = [...arr2];
  for (let i = arr1.length -1; i>=0;i--) {
    console.log(arr1[i]);

    // add the elements of arr1 into arr2 clone by using splice
    clone.splice(n, 0,(arr1[i]));
  }
  return clone;
}

// let result  = frankenSplice([1, 2, 3], [4, 5 ], 1); //should return [4, 1, 2, 3, 5].
// console.log(result);

function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
// let result  = bouncer([7, "ate", "", false, 9]);//should return [7, "ate", 9].
// // let result  = bouncer([null, NaN, 1, 2, undefined]);//should return [1, 2].
// console.log(result);

// use array.sort() to sort out array
// loop through sorted array, if a element is > num, 
// index would be i-1
function getIndexToIns(arr, num) {
  let newArr = [];
  let largest =0;
  // this for loop below is for sorting the array
  for (let i=0;i<arr.length;i++) {
    if (arr[i] > largest) {
      largest = arr[i];
      newArr.push(arr[i]);
    }else {
      newArr.unshift(arr[i]);

    }
  }
  for (let i=0; i<newArr.length;i++) {
    
    if (newArr[i]>= num ) {
      return (newArr.indexOf(newArr[i]));
    } 

  }
  return newArr.length ;
}

// // let result  = getIndexToIns([40, 60], 50); //should return 1
// let result  = getIndexToIns([2, 5, 10], 15); //should return 3
// // let result  = getIndexToIns([10, 20, 30, 40, 50], 35); //should return 3
// // let result  = getIndexToIns([10, 20, 30, 40, 50], 30); //should return 3
// // let result  = getIndexToIns([5, 3, 20, 3], 5); //should return 2
// console.log(result);


function mutation(arr) {
  let first = arr[0].toLowerCase(); 
  let second = arr[1].toLowerCase(); 
  let newString = ''; 
  let first_array  = ([...first ] );
  for (let i=0;i <second.length;i++) {
    if (first_array.indexOf(second[i])>-1) {
      newString+=second[i];
      }
    }
  return (newString == second);
}

// let result  = mutation(["hello", "hey"]);//false
// let result  = mutation(["hello", "Hello"]); //true
// let result  = mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);//true
// console.log(result);

// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-chunky-monkey/16005
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
// num + 1=  2
// let result  = chunkArrayInGroups(["a", "b", "c", "d"], 2);// [["a", "b"], ["c", "d"]].
let result  = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);// [[0, 1, 2], [3, 4, 5]].
// let result  = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);// [[0, 1, 2, 3], [4, 5]].
// let result  = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);// [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
console.log(result);



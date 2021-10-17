// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  // console.log(records[id][prop]);
  if (prop != 'tracks' && value != '') {
      // console.log(prop,value);
      records[id][prop] = value;
  }

  else if (prop == 'tracks' && records[id][prop] == undefined ) {
      var list = [];
      list.push(value);
      records[id][prop] = list;
  }
  else if (prop == 'tracks' && value != '') {
      records[id][prop].push(value);
  }

  else if (value == '') {
      delete records[id][prop];
  }
  return records;
}

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// console.log( updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
//
//
// Setup
// var myArray = [];

// Only change code below this line
// var i = 5;
// while (i >= 0) {
//   console.log(i);
//   myArray.push(i);
//   i--;
// }

// console.log(myArray);




// function multiplyAll(arr) {
//   var product = 1;
//   // Only change code below this line
//   // length of first array is 3, so i < 3
//   for (var i=0; i < arr.length; i++) {
//      for (var j=0; j < arr[i].length; j++) {
//        // console.log(arr[i][j])
//        product*=arr[i][j];

//      }
//   }
//   // Only change code above this line
//   return product;
// }

// // multiplyAll([[1,2],[3,4],[5,6,7]]);
// console.log( multiplyAll([[1,2],[3,4],[5,6,7]]));





// Setup
// var myArray = [];
// var i = 10;

// // Only change code below this line
// do {
//   myArray.push(i);
//   i++;
// } while (i < 5) ;
// console.log(myArray);

// add 1
// add 2
// add 3
// add 4
// stop
// if the length of the array

function sum(arr, n) {
  // Only change code below this line
  // base case
    if (n<=0) {
        // return arr[0];
        return 0;
      // console.log('stop');
      // return ('stop');
    }
    else {
      // return arr[n - 1] + sum(arr, n - 1);
      return sum(arr, n - 1) + arr[n - 1] ;
    }

  //recursive call to self
  // Only change code above this line
}

// sum([1,2,3,4,5,6,7,8], 4)
// console.log(sum([1,2,3,4,5,6,7,8], 4))
// console.log(sum([2, 3, 4, 5], 3))
// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
  for ( var i=0; i<contacts.length; i++) {
    if (contacts[i]['firstName'] ===name) {
        if (contacts[i].hasOwnProperty(prop) ) {
          return contacts[i][prop];
        }

        else {
          return 'No such property';
        }
      }
    }
  return 'No such contact';
  // Only change code above this line
}

// console.log( lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Harry", "likes"));
// console.log(lookUpProfile("Bob", "likes"));
// console.log( lookUpProfile("Akira", "address"));
var min= 2;
var max= 10;
var result  = Math.floor(Math.random() * (max - min + 1)) + min 
// console.log(result)

function convertToInteger(str) {
  return parseInt(str, 2);
}

result  =convertToInteger("10011");
// console.log(result);
//
//
//
//
//
// Only change code below this line
function countdown(n){
  // base case

  if (n < 1) {
    return [];
  }
  else { 
    const countArray = countdown(n - 1);
    // add n to the end of the array
    countArray.unshift(n);
    // returns the array back so you can push stuff in there
    return countArray;
  // recursive call
  // return;
    }
}
// console.log(countdown(-1));
// console.log(countdown(10)); // should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(countdown(3));
// console.log(countdown(5));


function countup(n) {
  if (n < 1) {
    return [];
  } else {
    // make an array that cant change, make it equal to countup again
    const countArray = countup(n - 1);
    // add n to the end of the array
    countArray.push(n);
    // returns the array back so you can push stuff in there
    return countArray;
  }
}
// console.log(countup(5));
// Only change code above this line
function rangeOfNumbers(startNum, endNum) {
  //base case
  // var num = 0;
  if (startNum > endNum)  {
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum + 1, endNum );
    
    countArray.unshift(startNum);
    return countArray;
  }
  //recursive call
  return [];
};
// console.log(rangeOfNumbers(1, 5)); // [1, 2, 3, 4, 5].
// console.log(rangeOfNumbers(1, 3)); // [1, 2, 3, 4, 5].
// console.log(rangeOfNumbers(6, 9)); // [6, 7, 8, 9].
// console.log(rangeOfNumbers(4, 4)); // [4].

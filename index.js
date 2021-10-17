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
  for (i=0; i<contacts.length; i++) {
    if (contacts[i]['firstName'] != name ) {
      return 'No such contact'
    }
    else if (contacts[i].hasOwnProperty(prop) != true) {
      return 'No such property'
    }
    else if (contacts[i]['firstName'] == name && contacts[i].hasOwnProperty(prop) == true) {
      return (contacts[i][prop]);
      }
    }
  // Only change code above this line
}

console.log( lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile("Kristian", "lastName"));


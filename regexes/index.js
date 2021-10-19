// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result);


// let username = "JackOfAllTrades";
// let username = "J";
let username = "A1";
let userCheck = /^[a-z]+\d*$/i; // Change this line
// let result = userCheck.test(username);
// let result = username.match(userCheck);
// console.log(result);
//
//
let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
// result = repeatStr.match(repeatRegex); // Returns ["row row row", "row"]

// console.log(result);
//

// let repeatNum = "42 42 42";
let repeatNum = "42 42 42 42";
let reRegex = /(\d+) \1 \1/; // Change this line
// let result = reRegex.test(repeatNum);
let result = repeatNum.match(reRegex);
// console.log(result);
//
//
//

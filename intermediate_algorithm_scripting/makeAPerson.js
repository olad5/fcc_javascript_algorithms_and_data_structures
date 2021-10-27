// Make A Person
var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let firstName =  firstAndLast.split(' ')[0];
  let lastName =  firstAndLast.split(' ')[1];
  // let fullName = firstName + ' ' + lastName;
  let fullName ;
  this.getFullName = function() {
    fullName = firstName+ ' ' + lastName;
    return fullName;
  };
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.setFullName = function(x) {
   firstName =  x.split(' ')[0];
   lastName =  x.split(' ')[1];
  };
  this.setFirstName = function(x) {
    firstName  =x;
  };
  this.setLastName = function(x) {
    lastName  =x;
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
// console.log(bob.getFullName());
// console.log(bob.getFirstName());
console.log(bob.getLastName());
// console.log(bob.setFullName("Haskell Curry"));
// console.log(bob.setLastName("Curry"));// this one's working
console.log(bob.setFirstName("Haskell"));// this one's working
console.log(bob.getFirstName());
console.log(bob.getFullName());
// console.log(bob.getLastName());
console.log(Object.keys(bob).length);


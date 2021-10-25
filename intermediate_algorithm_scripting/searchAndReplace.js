function myReplace(str, before, after) {
  let correctCase  = before[0].toLowerCase() ==before[0] ? after[0].toLowerCase(): after[0].toUpperCase()
  after = (correctCase+ after.slice(1));
  return str.replace(before, after);
}

console.log(myReplace("Let us go to the store", "store", "mall"));// Let us go to the mall
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));//  He is Sitting on the couch.
console.log(myReplace("I think we should look up there", "up", "Down"));//  I think we should look down there
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));//  This has a spelling error

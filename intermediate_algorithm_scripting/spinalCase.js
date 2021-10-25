
// YOu use join split and maybe filter
// Spinal Tap Case
// first of all split by non word characters
// then split by uppercase letters
//
//Fixed the string by removing the uppercased letters before dashes
function spinalCase(str) {
  // return str;
  // return str.split(/\W/);;
  // return str.split(/\W[A-Z]/);;
  let strRegex =  /[A-Z]/g;
  // return str.match(strRegex);;
  // return strRegex.test(str);;
  let nonWordSplits = str.split(/[^a-z]/i);;
  // return nonWordSplits;
  // console.log(nonWordSplits);
  console.log(str.match(strRegex));
  // console.log(str.matchAll(strRegex));
  // console.log(str.matchAll(/[A-Z]/));
  for (let i=0;i< nonWordSplits.length;i++) {
    // console.log(nonWordSplits[i]);
    // console.log(nonWordSplits[i].split(/[A-Z]/));
  }
  // return nonWordSplits.split(/[A-Z]/);
}

console.log( spinalCase('This Is Spinal Tap'));// return this-is-spinal-tap.
console.log( spinalCase('thisIsSpinalTap'));// return this-is-spinal-tap.
console.log( spinalCase('The_Andy_Griffith_Show'));// return the-andy-griffith-show
console.log( spinalCase('Teletubbies say Eh-oh'));// return teletubbies-say-eh-oh.
console.log( spinalCase("AllThe-small Things"));// return all-the-small-things.

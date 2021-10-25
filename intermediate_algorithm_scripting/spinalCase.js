// Spinal Tap Case
function spinalCase(str) {
  let strRegex =  /[A-Z]/g;
  let matchedLetters = (str.match(strRegex));
  let word= '';
   for ( let i=0; i< matchedLetters.length;i++) {
     let lowerCasedLetter = (matchedLetters[i].toLowerCase());
  
     str  = (str.replace(matchedLetters[i],(' ' + lowerCasedLetter)));

      
   }

  let nonWordRegex =  /[^a-z]/g;
  return (str.trim().replace(nonWordRegex, '-').replace(/--/g, '-'));


}

console.log(spinalCase('This Is Spinal Tap'));// return this-is-spinal-tap.
console.log(spinalCase('thisIsSpinalTap'));// return this-is-spinal-tap.
console.log(spinalCase('The_Andy_Griffith_Show'));// return the-andy-griffith-show
console.log(spinalCase('Teletubbies say Eh-oh'));// return teletubbies-say-eh-oh.
console.log(spinalCase("AllThe-small Things"));// return all-the-small-things.

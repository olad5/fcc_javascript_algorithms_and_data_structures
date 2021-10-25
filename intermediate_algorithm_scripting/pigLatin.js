function translatePigLatin(str) {
  let vowelsRegex = /[aeiou]/;
  let allLettersRegex = /[a-z]/;
  let firstVowelProp = (str.match(vowelsRegex));
    if (Boolean( firstVowelProp ) && firstVowelProp.index >  0) {
    let firstVowelIndex  = (firstVowelProp.index);
    let consonant_cluster = (str.slice(0, firstVowelIndex));
    let remaining_tail = (str.slice( firstVowelIndex));
    return (remaining_tail+ consonant_cluster+ 'ay');

  } 

  else if (Boolean( firstVowelProp ) && firstVowelProp.index == 0)   {
    return (str+ 'way');

  }

  else {
    return (str+ 'ay');

  }
}

console.log( translatePigLatin("california"));// aliforniacay
console.log( translatePigLatin("paragraphs"));// aragraphspay
console.log( translatePigLatin("glove"));// oveglay.
console.log( translatePigLatin("schwartz"));// artzschway.
console.log( translatePigLatin("eight"));// eightway
console.log( translatePigLatin("algorithm"));// algorithmway
console.log( translatePigLatin("rhythm"));// rhythmay

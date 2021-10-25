// Missing Letters
function fearNotLetter(str) {
 let alphas = 'abcdefghijklmnopqrstuvwxyz'
  for (let i=0; i< str.length;i++) {
    // this if statement checks checks tha the combination of a letter and the one
    // after it exists in the alphas. e.g ab, bc, de, fg, rs, tu, xy
    //If it doesn't exist, it returns -1
    if (alphas.search(str[i] + str[i+1]) == -1) {
      let missingLetter = (alphas[( alphas.indexOf(str[i]) ) +1]);
      let final =   (missingLetter) ?  missingLetter: undefined;
      return final;
    }
  }
}

console.log(fearNotLetter("abce"));// return d
console.log(fearNotLetter("abcdefghjklmno"));// return i
console.log(fearNotLetter("stvwx"));// return u
console.log(fearNotLetter("bcdf"));// return e
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));// return undefined

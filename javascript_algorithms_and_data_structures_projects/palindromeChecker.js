// Palindrome Checker
function palindrome(str) {
  // this splits the characters into an array, uses map to convert all of them to
  // lowercase, then filter them based on the ones that are only alphanumeric
  // then join them together into a string
  let list_of_characters  = str.split('').map((x) => x.toLowerCase()).filter((x) => ( x ).search(/[\W_]+/g) == -1).join('');
    // base case for recursion
    if (list_of_characters.length == 0 ||  list_of_characters.length == 1) {
        return true;
    }
      // recursive call
      // compares two opposite characters to know if they're the same
    if (list_of_characters[0] == list_of_characters[list_of_characters.length - 1]) {
        return palindrome(list_of_characters.slice(1, list_of_characters.length - 1));
    }

    return false;
}

console.log(palindrome("eye"));//true
console.log(palindrome("_eye"));//true
console.log(palindrome("race car"));//true
console.log(palindrome("A man, a plan, a canal. Panama"));//true
console.log(palindrome("never odd or even"));//true
console.log(palindrome("My age is 0, 0 si ega ym."));//true
console.log(palindrome("0_0 (: /-\ :) 0-0"));//true
console.log(palindrome("not a palindrome"));//false
console.log(palindrome('nope'));//false
console.log(palindrome('almostomla'));//false
console.log(palindrome('five|\_/|four'));//false



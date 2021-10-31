// Ceasers Ciphers
function rot13(str) {
  let str_list  =[];
  let alphas_list  = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ];
  for ( let i = 0; i< str.length; i++) {
    // index of the current character in the alphas_list
    let charIndex =  alphas_list.indexOf(str[i]);
    let sum =  charIndex + 13;
    let diff =  sum - 26;
    if ( !alphas_list.includes(str[i])) {
      str_list.push(str[i]);
      continue;
    }
    else if (diff >= 0 ) {
      let rot_of_num =  alphas_list[diff];
      str_list.push(rot_of_num);
    }
    else {
      let rot_of_num =  alphas_list[26 + diff];
      str_list.push(rot_of_num);
    }
  }
  return str_list.join('');
}

console.log(rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

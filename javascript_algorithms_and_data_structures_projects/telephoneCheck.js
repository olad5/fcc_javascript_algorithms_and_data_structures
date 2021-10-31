// Telephone Number Validator
function telephoneCheck(str) {
  let strRegex  ;
    
  // checks if the string has ( or )
  if (str.includes(')') || str.includes('(')) {
      if ( str[0] == '(') {
        strRegex  = /1*[\s]*\(+(\d\d\d)\)+[\s-]*(\d\d\d)-(\d\d\d\d)/;
        let match  = str.match(strRegex);
        // if no match return false 
          if (match == null) {
            return false;
          }
      // if the first match and the input are the same
      // the first match is mostly the whole thing the regex is matching
        return (match[0] == match.input);
        }
      else {
        strRegex  = /1*[\s]*\(+(\d\d\d)\)+[\s-]*(\d\d\d)[\s-]*(\d\d\d\d)/;
        let match  = str.match(strRegex);

        // if no match return false 
        if (match == null) {
          return false;
        }
      // if the first match and the input are the same
      // the first match is mostly the whole thing the regex is matching
        return (match[0] == match.input);

      }


  }
  else {
    // makes an array of the numbers from the str, i.e, excluding othr symbols
    let number_list  = str.split('').filter((x) => Number( x ));
    // if there are 11 numbers, it can only start with one hence the check
    if ( number_list.length == 11 && number_list[0] == 1) {
      strRegex  = /1*[\s]*\(*(\d\d\d)\)*[\s-]*(\d\d\d)[\s-]*(\d\d\d\d)/;
      let match  = str.match(strRegex);
        // if no match return false 
        if (match == null) {
          return false;
        }
      // if the first match and the input are the same
      // the first match is mostly the whole thing the regex is matching
      return (match[0] == match.input);

    }
    // if there are 10 numbers, it will try to match it
    else if ( number_list.length == 10 ) {
      strRegex  = /\(*(\d\d\d)\)*[\s-]*(\d\d\d)[\s-]*(\d\d\d\d)/;
      let match  = str.match(strRegex);
        // if no match return false 
        if (match == null) {
          return false;
        }
      // if the first match and the input are the same
      // the first match is mostly the whole thing the regex is matching
        return (match[0] == match.input);
    }
    
  }

  // it the str doesnt pass or fail any of the above tests, it's safe to say it's
  // not a valid phone number, so we return false
  return false;
}





// TESTS
  console.log(telephoneCheck("555-555-5555"));//true
  // console.log(telephoneCheck("222-222-2222"));//true
  // console.log(telephoneCheck("1 555-555-5555"));//true
  // console.log(telephoneCheck("1 (555) 555-5555"));//true
  // console.log(telephoneCheck('5555555555'));//true
  // console.log(telephoneCheck("(555)555-5555"));//true
  // console.log(telephoneCheck("1(555)555-5555"));//true
  // console.log(telephoneCheck("1 555 555 5555"));//true
  // console.log(telephoneCheck("1 456 789 4444"));//true



 // console.log(telephoneCheck('5555555'));//false
 // console.log(telephoneCheck('555-5555'));//false
 // console.log(telephoneCheck("1 555)555-5555"));//false
 // console.log(telephoneCheck("123**&!!asdf#"));//false
 // console.log(telephoneCheck('55555555'));//false
 // console.log(telephoneCheck("(555-555-5555"));//false
 // console.log(telephoneCheck("(555)5(55?)-5555"));//false

 // console.log(telephoneCheck("2 (757) 622-7382"));//false
 // console.log(telephoneCheck("0 (757) 622-7382"));//false
 // console.log(telephoneCheck("-1 (757) 622-7382"));//false
 // console.log(telephoneCheck("2 757 622-7382"));//false
 // console.log(telephoneCheck("10 (757) 622-7382"));//false
 // console.log(telephoneCheck("27576227382"));//false
 // console.log(telephoneCheck("(275)76227382"));//false
 // console.log(telephoneCheck("2(757)6227382"));//false
 // console.log(telephoneCheck("2(757)622-7382"));//false

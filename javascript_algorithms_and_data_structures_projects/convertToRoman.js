// Roman Numeral Converter
function convertToRoman(num) {
    let symbols  = {
            1:'I',
            4:'IV',
            5:'V',
            9:'IX',
            10:'X',
            40:'XL',
            50:'L',
            90:'XC',
            100:'C',
            400:'CD',
            500:'D',
            900:'CM',
            1000:'M',
        };
    if (num == 0 ) {
        return '';
    }

    let arabic_nums  = Object.keys( symbols).map(i=> Number(i));

    if ( arabic_nums.includes(num) ) {
        return symbols[num];
    }

    else {
        // this adds the current num to the total nums and sorts them in ascending order
        let sorted_with_num = arabic_nums.concat([num]).sort((a, b) => a - b);
        // this gets the highest number before the main number in the sorted array
        let highest_lower_than_num  = sorted_with_num[sorted_with_num.indexOf(num) - 1];
        // this gets the number of times the highest_lower_than_num occurs in the current num
        let num_occurences = Math.floor(num / highest_lower_than_num);

        let remainder = num - (highest_lower_than_num * num_occurences);

        // the recursive call
        return  symbols[highest_lower_than_num].repeat(num_occurences) + convertToRoman(remainder);
    }

 
}



console.log(convertToRoman(29)); // XXIX
console.log(convertToRoman(449)); // CDXLIX
console.log(convertToRoman(400)); // CD
console.log(convertToRoman(500)); // D
console.log(convertToRoman(649)); // DCXLIX
console.log(convertToRoman(1000)); // M
console.log(convertToRoman(1004));// MIV
console.log(convertToRoman(1023));// MXXIII
console.log(convertToRoman(3999));// MMMCMXCIX

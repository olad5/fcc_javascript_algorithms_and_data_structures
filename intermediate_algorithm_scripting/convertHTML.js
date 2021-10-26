// Convery HTML entities
// function convertHTML(arr) {
function convertHTML(str) {
  let arr  = str.slice(0);
  for ( let i=0; i< str.length;i++) {
    switch(str[i]) {
      case "&":
          str  = (str.replace('&', '&amp;'));
          break;
      case "<":
          str  = (str.replace('<', '&lt;'));
           break;
      case ">":
          str  = (str.replace('>', '&gt;'));
           break;
      case '"':
          str  = (str.replace('"', '&quot;'));
           break;
      case "'":
          str = (str.replace("'", '&apos;'));
           break;
    }
  }
  return str;
}

console.log(convertHTML("Dolce & Gabbana")); //Dolce &amp; Gabbana
console.log(convertHTML("Hamburgers < Pizza < Tacos")); //Hamburgers &lt; Pizza &lt; Tacos
console.log(convertHTML("Sixty > twelve")); //Sixty &gt; twelve
console.log(convertHTML('Stuff in "quotation marks"')); //Stuff in &quot;quotation marks&quot;
console.log(convertHTML("Schindler's List")); //Schindler&apos;s List
console.log(convertHTML("<>")); //&lt;&gt;
console.log(convertHTML("abc")); //abc

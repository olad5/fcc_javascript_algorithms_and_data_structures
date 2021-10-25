function pairElement(str) {
  let newArr  = [];
  for ( let i=0; i< str.length;i++) {
    let arr  = [];
    // console.log(str[i]);
    switch(str[i]) {
      case "G":
          newArr.push(['G', 'C']); 
          break;
      case "A":
          newArr.push(['A', 'T']); 
           break;
      case "T":
          newArr.push(['T', 'A']); 
           break;
      case "C":
          newArr.push(['C', 'G']); 
           break;
    }
  }
  return newArr;
}

// console.log(pairElement("GCG"));//[["G", "C"], ["C","G"], ["G", "C"]]
console.log(pairElement("ATCGA"));//[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// console.log(pairElement("TTGAG"));//[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
// console.log(pairElement("CTCTA"));//[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

function destroyer(arr) {
  let newArr = [];

  for (let n in arguments) {
    if (n > 0) {
      newArr.push(arguments[n]);
      }
    }
  return (arr.filter(element => newArr.indexOf(element)< 0));
}

// console.log( destroyer([1, 2, 3, 1, 2, 3], 2, 3));//return [1,1]
// console.log( destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));//return [1, 5, 1]
// console.log( destroyer([3, 5, 1, 2, 2], 2, 3, 5));//return [1 ]
console.log( destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));//return [12,92,65]


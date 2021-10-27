// Map the Debris
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let avgAlt  ;
  let newArr = [];  
   for (let n in arr) {
    let obj_name = (arr[n].name);  
    avgAlt  = (arr[n].avgAlt);  
    let  R  = earthRadius+ avgAlt;
    let  V  = Math.sqrt(( GM/ R ));
    let  period  = 2* Math.PI* (R/V);
    let final_output = {name: obj_name, orbitalPeriod: Math.round( period )}
     newArr.push(final_output);

   }
  return (newArr);
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));// [{name: "sputnik", orbitalPeriod: 86400}]
// console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));// [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].

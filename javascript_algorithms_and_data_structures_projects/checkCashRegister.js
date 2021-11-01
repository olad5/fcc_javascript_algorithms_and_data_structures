// CASH REGISTER
function checkCashRegister(price, cash, cid) {
  let change = 100 * (cash - price);
  let originalCid = JSON.parse(JSON.stringify(cid));

  let availableFunds = 0;
  
  // check what happens if you remove 10000, the last figure in the array below
  let moneyValues = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  let amtToReturn = [];
  
  for (let i = cid.length - 1; i >= 0; i--){
    let amt = 0;
    while (moneyValues[i] <= change && cid[i][1] > 0 && change > 0){
      cid[i][1] -= moneyValues[i]/100; // reduce amount in cid
      change -= moneyValues[i]; // reduce amount from change
      amt += moneyValues[i]/100; // keep track of how much money was taken out of cid
    }
    if (amt !== 0){
      // adds record of amount taken out of cid
      amtToReturn.push([cid[i][0], amt]);
    }
  }
  
  
  // if there is still some change left over
  if (change !== 0){
    return ({
      status: "INSUFFICIENT_FUNDS", change: []
    });
  }
  
  // if there is any money left in cid, it returns amtToReturn
  for (let j = 0; j < cid.length; j++){
    if (cid[j][1] > 0){
      return ({
          status: "OPEN", change: amtToReturn
      });
    }
  }
  
  // if register is empty
  return ({
      status: "CLOSED", change: originalCid
  });
  
}



console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // {status: "OPEN", change: [["QUARTER", 0.5]]}


console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "INSUFFICIENT_FUNDS", change: []}


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "INSUFFICIENT_FUNDS", change: []}


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

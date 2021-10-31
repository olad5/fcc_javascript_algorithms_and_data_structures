function checkCashRegister(price, cash, cid) {
    let currency_units  = {
            PENNY:'0.01',
            NICKEL:'0.05',
            DIME:'0.1',
            QUARTER:'0.25',
            ONE:'1',
            FIVE:'5',
            TEN:'10',
            TWENTY:'20',
            'ONE HUNDRED':'100',
        };
  let figures  = Object.values( currency_units).map(i=> Number(i));
  let cur_names  = Object.keys( currency_units).map(i=> (i));
  let change = cash - price;
  let total_cid = cid.map((arr) => arr[1]).reduce((acc, currenValue) => acc + currenValue).toFixed(2);
   // console.log(cid.map((arr) => arr[1]));
   let list_avail_cid = (cid.map((arr) => arr[1]));
  // console.log(list_avail_cid);
  // this checks if the total_cid is less than change available
  if (total_cid == change) {
    console.log(`Change: ${change}`);
    console.log(`total_cid: ${total_cid}`);
    return ({
      status: "CLOSED", change: cid
    });
  }
  // else if (figures.includes(change) == true && total_cid == change) {
  // else if (total_cid == change) {
  // else if (total_cid < change || figures.includes(change) == false) {
  // else if (total_cid < change || figures.includes(change) == false) {
  // console.log(total_cid > pay);
  else if (total_cid < change || list_avail_cid.includes(change) == false) {
    console.log(`Change: ${change}`);
    console.log(`total_cid: ${total_cid}`);
    return ({
      status: "INSUFFICIENT_FUNDS", change: []
    });

  }
  else {
    console.log(cid);

  }
  // console.log(cur_names);
  // return change;
  // return figures;
  // return cur_names;
  // return change;
}
    let currency_units_clone  = {
            PENNY:'0.01',
            NICKEL:'0.05',
            DIME:'0.1',
            QUARTER:'0.25',
            ONE:'1',
            FIVE:'5',
            TEN:'10',
            TWENTY:'20',
            'ONE HUNDRED':'100',
        };

// in all the situations, total_cid is larger than change
//
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // {status: "OPEN", change: [["QUARTER", 0.5]]}


console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "INSUFFICIENT_FUNDS", change: []}


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "INSUFFICIENT_FUNDS", change: []}


// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

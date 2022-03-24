//Powers of 2
//https://www.codewars.com/kata/57a083a57cb1f31db7000028
function powersOfTwo(n){
    let exponents = [];
    for (i = 0; i <= n; i++) exponents.push(Math.pow(2, i));
    return exponents
  }
//Square Every Digit
//https://www.codewars.com/kata/546e2562b03326a88e000020
function squareDigits(num){
  let word = num.toString();
  num = '';
  for (let numChar of word) {
    num += Math.pow(Number(numChar), 2);
  };
  return Number(num);
}
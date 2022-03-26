//Persistent Bugger.
//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
function multiply(num) {
  let word = num.toString();
  num = 1;
  for (let numChar of word) {
    num *= Number(numChar);
  };
  return num;
}

function persistence(num) {
  let i = 0;
  while (num > 9) {
    num = multiply(num);
    i++;
  };
  return i;
}
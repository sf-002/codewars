//Sum of Digits / Digital Root
//https://www.codewars.com/kata/541c8630095125aba6000c00
function digital_root(n) {
  if (n > 9) {
    n = n.toString().split('').reduce( function(sum, numeral) {
      return sum += Number(numeral);
    }, 0);
    n = digital_root(n);
  }
  return n;
}
//Descending Order
//https://www.codewars.com/kata/5467e4d82edf8bbf40000155
function descendingOrder(n){
  let arr = n.toString().split('');
  return Number(arr.sort( (a, b) => b - a ).join(''));
}
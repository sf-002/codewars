//Disemvowel Trolls
//https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers){
  let arr = numbers.split(' ');
  arr.sort( (a, b) => a - b );
  return `${arr[arr.length - 1]} ${arr[0]}`
}
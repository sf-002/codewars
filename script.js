//Find the odd int
//https://www.codewars.com/kata/54da5a58ea159efa38000836
function findOdd(A) {
  let oddNum = 0;
  //A.forEach(function (item, index, arr) {
  let objOfAppears = A.reduce( function(accArr, item) {
      accArr[item] = (accArr[item] || 0) + 1;
      return accArr;
      }, {});
  for (let key in objOfAppears) {
    if (objOfAppears[key] % 2 == 1) {
      oddNum = parseInt(key);
      break;
      }
  }
  return oddNum;
}

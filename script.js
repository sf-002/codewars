//Find The Parity Outlier
//https://www.codewars.com/kata/5526fc09a1bbd946250002dc
function findOutlier(integers){
  let j = 0;
  for (let i = 0; i < 3; i++) {
    j += Math.abs(integers[i] % 2);
  };
  let remainder = 0;
  if (j <= 1) remainder = 1;
  integers = new Set(integers);
  let i;
  for (let value of integers) if (Math.abs(value % 2) == remainder) return value;
}
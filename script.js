//Array.diff hero
//https://www.codewars.com/kata/581fc49b55c3d2d83c0000f8
function arrayDiffVeryFast(a, b) {
  let resArr = [];
  const bSet = new Set(b);
  for (let i = 0, len = a.length; i < len; i++) {
    if (!bSet.has(a[i])) resArr.push(a[i]); 
  }
  return resArr;
}
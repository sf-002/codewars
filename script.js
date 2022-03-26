//Vowel Count
//https://www.codewars.com/kata/54ff3102c1bad923760001f3
function getCount(str) {
  var vowelsCount = 0;
  const vowels = new Set('aeiou');
  for (let char of str) {
    if (vowels.has(char)) vowelsCount++;
  }  
  return vowelsCount;
}
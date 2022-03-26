//Disemvowel Trolls
//https://www.codewars.com/kata/52fba66badcd10859f00097e
function disemvowel(str) {
  const vowels = new Set('aeiouAEIOU');
  let i = 0, 
      newStr = '';
  for (let char of str) {
    if (!vowels.has(char)) newStr += str[i];
    i++;
  }  
  return newStr;
}
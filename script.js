//Assemble string
//https://www.codewars.com/kata/6210fb7aabf047000f3a3ad6
function assembleString(array){
  if (typeof array == 'undefined') array = [];
  if (typeof array[0] == 'undefined') array[0] = 0;
//  const wordLen = array[0].length;
//  const arrLen = array.length;
  let word = [];
  for (let i = 0; i < array[0].length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j][i] == '*') word[i] = '#'
      else {
          word[i] = array[j][i];
          break;
        }
      }
    }
  return word.join('');
}

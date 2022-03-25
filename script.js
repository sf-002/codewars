//bread sandwiches
//https://www.codewars.com/kata/622a6a822494ab004b2c68d2
function slicesToName(n) {
  let phrase = '';

  if (n > 3) {
    if (n % 2 == 1) {
      phrase = 'bread sandwich';// + (' sandwich'*((n-3)/2))
      for (let i = 0; i < (n-3)/2; i++) phrase += ' sandwich';
      }
    else {
      phrase = 'sandwich';// + ' sandwich'*(n/2-1);
      for (let i = 0; i < n/2-1; i++) phrase += ' sandwich';
      }
  } else if (n > 1){
    if (n % 2 == 1) phrase = 'bread sandwich'
    else phrase = 'sandwich';
  } else {
    phrase = null;
  }
  return phrase;
}

function nameToSlices(name) {
  let numOfBreads = 0;
  let cookArr;
  if (typeof name == 'string') cookArr = name.split(' ')
  else return null;
  for (let i = cookArr.length - 1; i >= 0; i--) {
    if (cookArr[i] == 'bread' && i == 0 && numOfBreads != 0) numOfBreads++
    else if (cookArr[i] == 'sandwich') numOfBreads += 2
    else //if (cookArr[i] != 'sandwich'){
      return null;  
    //  }
  }
  return numOfBreads;
}

// have fun!

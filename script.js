//Take a Ten Minutes Walk
//https://www.codewars.com/kata/54da539698b8a2ad76000228
function isValidWalk(walk) {
  if (walk.length == 10) {
    if (walk.reduce(function(value, item) {
      if (item == 's') value += 1
      else if (item == 'n') value -= 1;
      return value;
    }, 0) == 0 
       &&
       walk.reduce(function(value, item) {
      if (item == 'w') value += 1
      else if (item == 'e') value -= 1;
      return value;
    }, 0) == 0  ) return true;
  } else return false; 
}
//самое унылое нечитаемое решение
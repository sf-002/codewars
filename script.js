//Pillars
//https://www.codewars.com/kata/5bb0c58f484fcd170700063d
function pillars(num_pill, dist, width) {
    return Math.max(0, dist * (num_pill - 1) * 100 + width * (num_pill - 2));
  }
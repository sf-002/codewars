//Pascal's Diagonals
//https://www.codewars.com/kata/576b072359b1161a7b000a17
function factorial(n) {
    return (n > 1) ? n * factorial(n - 1) : 1;
  }
  function pascTriElement (n, m) {
    return factorial(n) / (factorial(m) * factorial(n - m));
  }
  function generateDiagonal(n, l) {
    let diagonal = [];
    for (let i = 0; i < l; i++){
      diagonal.push( Math.round(pascTriElement(n, i)) );
      n++;
    }
    return diagonal;
    // return an array containing the numbers in the nth diagonal of Pascal's triangle, to the specified length
  }
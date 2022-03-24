//How many pages in a book?
//https://www.codewars.com/kata/622de76d28bf330057cd6af8
function amountOfPages(summary){
    let i;
    for (i = 1, n = 1; n <= summary; ++i){
      n += String(i).length; 
    }
    return i-1
  }
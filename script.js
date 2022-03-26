//Stop gninnipS My sdroW!
//https://www.codewars.com/kata/5264d2b162488dc400000001/
function spinWords(string){
  let arr = string.split(' ');
  arr = arr.reduce( function(value, item) {
    if (item.length >= 5) {
      item = item.split('').reverse().join('');
    }
    value.push(item);
    return value;
  }, [])
  return arr.join(' ');
}

//надо было использовать map🤷‍♂️
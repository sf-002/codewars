//Multiples of 3 or 5
//https://www.codewars.com/kata/514b92a657cdc65150000006
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

//Isograms
//https://www.codewars.com/kata/54ba84be607a92aa900000f1
function isIsogram(str){
  setStr = new Set(str.toLowerCase().split(''));
  return setStr.size == str.length;
}
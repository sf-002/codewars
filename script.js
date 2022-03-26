//Create Phone Number
//https://www.codewars.com/kata/525f50e3b73515a6db000b83
function createPhoneNumber(numbers){
  return `(${numbers.splice(0, 3).join('')}) ${numbers.splice(0, 3).join('')}-${numbers.join('')}`
}
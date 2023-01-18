/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

//P: number, whole, +, if number < 0 return 0
//R: sum of all numbers that are multiple of 3 or 5

function solution(number) {
  if (number<0){
    return 0
  }
  //need an array of numbers that are multiples of 3 and 5

  let arr = [];
  //we need to generate numbers from 0 to number and then shift the 0 so we get only the range between 1 and number

  let numbers = [...Array(number).keys()];
  numbers.shift();
  

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
      arr.push(numbers[i]);
    } else if (numbers[i] % 5 === 0) {
      arr.push(numbers[i]);
    } else{

    }
    
  }
  
  console.log(arr);
  //we need to reduce numbers divisible by 3 and 5 into one value
  return arr.reduce((acc, c) => acc + c, 0);
}

//E:
solution(3); //
solution(5); //3
solution(15); //3,5,6,9,10,12
solution(33); //3,5,6,9,10,12,15,18,20,21,24,25,27,30

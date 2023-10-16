// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

function fizzBuzz(givenNumber) {
  for (let currentNum = 1; currentNum <= givenNumber; currentNum++)
    if (currentNum % 3 === 0 && currentNum % 5 === 0) {
      console.log("Fizz Buzz", currentNum);
    } else if (currentNum % 5 === 0) {
      console.log("Buzz", currentNum);
    } else if (currentNum % 3 === 0) {
      console.log("Fizz", currentNum);
    } else {
      console.log(currentNum);
    }
}

fizzBuzz(50);

// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.
//1 - num no funny biz
function fizzBuzz(num){
  // %2 -> fizz; %3 -> buzz; 2%&&%3 -> fizzBuzz; num
  for(let i = 1; i<=num;i++){
    if(i % 6 === 0){
      console.log('FizzBuzz')
    }else if(i % 2 === 0){
      console.log('Fizz')
    }else if(i % 3 === 0){
      console.log('Buzz')
    }else{
      console.log(i)
    }
    
  }
}

console.log(fizzBuzz(6), '1,fizz,buzz,fizz,5,fizzBuzz')
console.log(fizzBuzz(8), '1,fizz,buzz,fizz,5,fizzBuzz,7,fizz')

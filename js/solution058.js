//Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

function fizzBuzz(num) {
  const arr = Array.from(Array(num), (e, i) => i + 1);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0 && arr[i] % 3 === 0) {
      console.log(`Fizz Buzz ${arr[i]}`);
    } else if (arr[i] % 3 === 0) {
      console.log(`Buzz ${arr[i]}`);
    } else if (arr[i % 5 === 0]) {
      console.log(`Fizz ${arr[i]}`);
    }
  }
}

fizzBuzz(15);

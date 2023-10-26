// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// repeats([4,5,7,5,4,8]),15)
// repeats([9, 10, 19, 13, 19, 13]),19)

//all nums no funny biz
//return sum of singles

function repeats(arr){
  //filter arr -> singles - indexOf(n) === lastIndexOf(n)
  //sum the singles - reduce
  return arr.filter( n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a,c) => a + c, 0)
}

console.log( repeats([4,5,7,5,4,8]),  15)
console.log( repeats([9, 10, 19, 13, 19, 13]), 19  )

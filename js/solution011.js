function sumDigits(number) {
  number = Math.abs(number)
  let str = number.toString()
  let arr = Array.from(str)
  
  //maps string digits to number digits and sums them up
  const result = arr.map(element=>Number(element)).reduce((sum, val)=>sum + val,0);

  return result
}
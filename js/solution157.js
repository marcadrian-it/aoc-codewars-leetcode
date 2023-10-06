function sortArray(arr){
  //filter -> sort
  const oddNums = arr.filter(n => n % 2 !== 0).sort((a,b)=>b-a)
  //console.log(oddNums)
  //map
  return arr.map(n => n % 2 === 0 ? n : oddNums.pop())
}
console.log(sortArray([7, 1]),'[1,7]')
console.log(sortArray([5, 8, 6, 3, 4]),'[3, 8, 6, 5, 4]')

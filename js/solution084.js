// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });           


function twoSum(arr, sum){
  const seenNumbers = {}
  const numbersThatAddUp = []
  arr.forEach(currentNumber => {
    if(seenNumbers[sum - currentNumber]){
      numbersThatAddUp.push([currentNumber,(sum - currentNumber)])
    }else{
      seenNumbers[currentNumber] = true 
    }
  })
  return numbersThatAddUp
}


console.log(twoSum([1, 2, 2, 3, 4], 4))
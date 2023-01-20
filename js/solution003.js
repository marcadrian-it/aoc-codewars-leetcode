function arrayDiff(a, b) {
  //P: array a, and array b can be empty 
  //R: changed array a with all values from array b excluded
  //E: 
  
  // Filters each element of array a that are included in array b
  return a.filter(element => !b.includes(element));
  
}

arrayDiff([1,2],[1]) // should equal [2]
arrayDiff([1,2,2],[]) // should equal [1,2,2]
arrayDiff([1,2,2,2,3],[2]) // should equal [1,3]
arrayDiff([1,2,2],[2]) // should equal [1]
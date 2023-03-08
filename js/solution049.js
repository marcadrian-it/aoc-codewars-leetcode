function arithmeticSequenceElements(a, d, n) {
  let arr = []
  arr.push(a)
  for(let i = 0;i<n-1;i++){
    a+=d
    arr.push(a)
  }
	return arr.join(", ");
}
multiplicationTable = function(size) {
  let result = []
  for(let i=1;i<=size;i++){
    let arr = []
    for(let j=size;j>0;j--){
      arr.push((size-j+1)*i)
    }
    result.push(arr)
  }
  return result
}

function towerBuilder(nFloors) {
  let arr = []
  let whitespaceCount = 0
  for(let i=nFloors;i>0;i--){
    whitespaceCount = nFloors - i
    let str = ' '.repeat(whitespaceCount+1/2)+ '*'.repeat((2*i)-1) + ' '.repeat(whitespaceCount+1/2)
    arr.push(str)
  }
  return arr.reverse()
}
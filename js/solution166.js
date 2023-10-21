function binaryCleaner(arr) {
  const lessThanTwo = [];
  const indicesOfNumbersGreaterThanOne= [];
  arr.forEach((element,index)=>{
    if(element<2){
      lessThanTwo.push(element)
    }
    if(element>1){
      indicesOfNumbersGreaterThanOne.push(index)
    }
  }) 
  return [lessThanTwo,indicesOfNumbersGreaterThanOne]
}

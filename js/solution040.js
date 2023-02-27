function narcissistic(value) {
  const digits = Array.from(value.toString())
  let result = 0
  digits.forEach(element=>{
    result+=Math.pow(element, digits.length)
  })
  if(result == value){
    return true;
  }else{
    return false
  }
}
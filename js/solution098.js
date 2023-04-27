function digits(n) {
  if(typeof n === 'number'){
    return n.toString().length
  }else{
    return "Fail!"
  }
}
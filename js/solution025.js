function cleanString(s) {
  let arr = []
  for(const letter of s){
    if(letter==='#'){
      arr.pop()
    }else{
      arr.push(letter)
    }
  }
  return arr.join('')
}
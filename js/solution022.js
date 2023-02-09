function palindrome(string) {
  if(!string){
    return true
  }
  string = string.toLowerCase().replace(/[^0-9a-z]/gi, '');
  let result = []
  for(let i=string.length;i>0;i--){
    result.push(string[i-1])
    
  }
  result=result.join('')
  if (result === string){
    return true
  }else{
    return false
  }
}
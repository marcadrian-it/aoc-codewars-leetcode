function isPangram(string){
    string=string.toLowerCase()
    let alphabet="abcdefghijklmnopqrstuvwxyz".split("")
    for(let letter of alphabet){
      if(!string.includes(letter)){
        return false
      }
    }
    return true
  }
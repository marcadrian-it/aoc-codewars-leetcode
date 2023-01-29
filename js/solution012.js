function pigIt(str){
  let resultString =""
  const words = str.split(" ")
  for(let word of words){
  if('?,!'.includes(word)){
     resultString += word
     }else{
  resultString += `${word.slice(1,word.length)}${word.slice(0,1)}ay `
  resultString += ""    
  }

      
    }
  return resultString.trim()
  }

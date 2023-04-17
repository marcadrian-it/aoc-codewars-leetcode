function vowelIndices(word){
  const vowels = ["a","e","i","o","u"]
  const arrOfWords = word.toLowerCase().split('')
  let result = []
  arrOfWords.forEach((letter,index)=>{
    if(vowels.includes(letter)){
      result.push(index+1)
    }
  })
  return result
}
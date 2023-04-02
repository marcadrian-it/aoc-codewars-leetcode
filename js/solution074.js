// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

function removeConsecutive (strng){
  const strArr = strng.split(' ')
  const result = []
  for(let i=0;i<strArr.length;i++){
    if(i===0){
      result.push(strArr[0])
      } else if(strArr[i] !== strArr[i-1]){
        result.push(strArr[i])
    }
  
  }
return result.join(' ')
}
console.log(removeConsecutive("alpha beta gamma delta alpha beta gamma delta"))
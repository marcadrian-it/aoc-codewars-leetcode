// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


function strToBraces(str) {
  const letters = str.split('').map((element, _) => element.toLowerCase())
  return letters.map((element,_)=>{
    if(letters.indexOf(element) === letters.lastIndexOf(element)){
      return "("
    }else{
      return ")"
    }
  }).join('')
}

console.log(strToBraces('(( @'))

// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function occuringChars(strng){
  const dict = {}

  for(let i=0;i<strng.length;i++){
    dict[strng[i]] = (dict[strng[i]] || 0)  + 1
  }
  return dict
}

console.log(occuringChars('aba'))
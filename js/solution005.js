function spinWords(string){
 // split string into words array 
 let words = string.split(' ')
 let resultArray = []
 // iterate through words and check whether they have to be reversed add them to the result array
 for (let item of words){
   if(item.length >=5){
 //turning string into an array to reverse it and then back to string    
    resultArray.push(Array.from(item).reverse().join(''))
   }
   else{
     resultArray.push(item)
   }
 }
 // turning an array of words into a string 
 return resultArray.join(' ')
}

/*
P: string consisting of words, starting with upper case
R: returns same string but with words > 5 chars reversed
*/
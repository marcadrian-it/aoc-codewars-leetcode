// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

//arr
//indx -> el in the middle

function gimme(arr){
  //sort -> 1indx
  //arr -> indexOf num ^
  return arr.indexOf([...arr].sort((a,b) => a - b)[1])
  //   if ((inputArray[0] < inputArray[1] && inputArray[0] > inputArray[2])
  //   || (inputArray[0] > inputArray[1] && inputArray[0] < inputArray[2]))
  //   return 0;
    
  // if ((inputArray[1] < inputArray[0] && inputArray[1] > inputArray[2])
  //   || (inputArray[1] > inputArray[0] && inputArray[1] < inputArray[2]))
  //   return 1;
    
  // if ((inputArray[2] < inputArray[0] && inputArray[2] > inputArray[1])
  //   || (inputArray[2] > inputArray[0] && inputArray[2] < inputArray[1]))
  //   return 2;
}
console.log(gimme([2, 3, 1]),"0")
console.log(gimme([5, 10, 14]),"1")

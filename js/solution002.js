//There is an array with some numbers. All numbers are equal except for one. Try to find it!
function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }

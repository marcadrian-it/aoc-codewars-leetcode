

function deleteNth(arr, n) {
  const dict = {};
  const result = [];
  arr.forEach((number) => {
    if (dict[number] < n || dict[number] === undefined) {
      dict[number] = (dict[number] || 0) + 1;
      result.push(number);
    }
  });
  return result;
}



console.log(deleteNth([20,37,20,21], 1))
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))

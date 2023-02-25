const removeConsecutiveDuplicates = s => {
  const arr = s.split(' ');
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr.join(' ');
}
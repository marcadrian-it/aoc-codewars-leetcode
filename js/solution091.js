function findLongest(array) {
  let max = 0;
  let result;
  for (let i = 0; i < array.length; i++) {
    if (String(array[i]).length > max) {
      max = String(array[i]).length;
      result = array.indexOf(array[i]);
    }
  }
  return array[result];
}

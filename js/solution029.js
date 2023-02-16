function moveZeros(arr) {
  const result = arr.map((element) => {
    if (element !== 0) {
      return element;
    }
  }).filter((element) => element !== undefined);
  const zeros = arr.filter((element) => element === 0);
  return result.concat(zeros);
}
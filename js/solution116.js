function checkExam(array1, array2) {
  let counter = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      counter += 4;
    } else if (array2[i] !== "") {
      counter -= 1;
    }
  }
  return Math.max(0, counter);
}

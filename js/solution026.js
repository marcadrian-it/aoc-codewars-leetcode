function inArray(array1, array2) {
  let r = [];
  for (const substring of array1) {
    for (const string of array2) {
      if (string.includes(substring) && !r.includes(substring)) {
        r.push(substring);
      }
    }
  }
  r.sort((a, b) => a.localeCompare(b));
  return r;
}

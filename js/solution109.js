function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  const arr = [age1, age2, age3, age4, age5, age6, age7, age8].map(
    (element) => element * element
  );
  return Math.floor(
    Math.sqrt(arr.reduce((acc, element) => acc + element, 0)) / 2
  );
}

function combineArrays<T>(arrays: T[][]): T[] {
  let jointArray: T[] = [];
  arrays.forEach((array) => (jointArray = [...jointArray, ...array]));
  const uniqueArray = jointArray.filter(
    (item, index) => jointArray.indexOf(item) === index
  );
  return uniqueArray;
}

console.log(
  combineArrays([
    ["1", 2, 3],
    [2, 3, "1", 5],
  ])
);

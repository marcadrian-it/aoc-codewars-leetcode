function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  let result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
}

console.log(chunkArray(["2,43", 2, 3, 4, 5, 6, "13", "lose", 5], 2));

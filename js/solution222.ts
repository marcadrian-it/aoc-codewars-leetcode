function integerReversal(num: number): number {
  let reversedNum = num
    .toString()
    .split("")
    .reduce((acc, dig) => dig + acc, "");

  return Number(reversedNum);
}

console.log(integerReversal(331));

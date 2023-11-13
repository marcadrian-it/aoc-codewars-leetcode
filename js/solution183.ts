export default function bs_list(haystack: number[], needle: number): boolean {
  let low = 0;
  let high = haystack.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (needle < haystack[mid]) {
      high = mid - 1;
    } else if (needle > haystack[mid]) {
      low = mid + 1;
    } else {
      console.log("Index of the needle:", mid);
      return true;
    }
  }
  return false;
}

console.log(
  bs_list(
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 34, 36,
      37, 38, 39, 40, 41,
    ],
    39,
  ),
);

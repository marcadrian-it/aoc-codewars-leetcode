function whereBelongs(array: number[], num: number): number {
  array.sort((a, b) => a - b);
  let idx = 0;
  for (let i = 0; i < array.length; i++) {
    if (num > array[i]) {
      idx++;
    }
  }
  return idx;
}

let numbers = [10, 20, 30, 40, 50];
let result = whereBelongs(numbers, 35);
console.log(result); // Outputs: 3

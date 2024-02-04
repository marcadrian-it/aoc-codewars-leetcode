function arrayFilter<T>(arr: T[], func: (value: T) => boolean): T[] {
  let result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

let numbers = [1, 5, 12, 18, 9];
let result = arrayFilter(numbers, (num) => num > 10);
console.log(result);

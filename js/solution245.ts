/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(numbers: number[], rotationSteps: number): void {
  let arrayLength = numbers.length;
  let rotatedArray = new Array(arrayLength);
  for (let currentIndex = 0; currentIndex < arrayLength; currentIndex++) {
    rotatedArray[(currentIndex + rotationSteps) % arrayLength] =
      numbers[currentIndex];
  }
  for (let currentIndex = 0; currentIndex < arrayLength; currentIndex++) {
    numbers[currentIndex] = rotatedArray[currentIndex];
  }
}

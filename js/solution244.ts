function majorityElement(nums: number[]): number {
  const map = new Map();
  const threshold = Math.floor(nums.length / 2);
  let majorityElement = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
    if (map.get(nums[i]) > threshold) {
      majorityElement = nums[i];
      break;
    }
  }

  return majorityElement;
}

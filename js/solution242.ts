function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = 0;
  let j = 0;
  while (j < n) {
    if (i < m && nums1[i] <= nums2[j]) {
      i++;
    } else {
      nums1.splice(i, 0, nums2[j]);
      nums1.pop();
      j++;
      m++;
      i++;
    }
  }
}

function merge_sort(
    arr: number[],
    lo: number,
    hi: number,
): number[] | undefined {
    // Base case: if the array has 1 or 0 elements, it's already sorted
    if (lo >= hi) {
        return;
    }

    // Find the middle point to divide the array into two halves
    const middle = Math.floor((lo + hi) / 2);

    // Call merge_sort for first half
    merge_sort(arr, lo, middle);

    // Call merge_sort for second half
    merge_sort(arr, middle + 1, hi);

    // Merge the two halves sorted in step 2 and 3
    merge(arr, lo, middle, hi);

    return arr;
}

// Merges two subarrays of arr[].
// First subarray is arr[lo..middle]
// Second subarray is arr[middle+1..hi]
function merge(arr: number[], lo: number, middle: number, hi: number): void {
    const leftArr = arr.slice(lo, middle + 1);
    const rightArr = arr.slice(middle + 1, hi + 1);

    // Initial indexes of first and second subarrays
    let leftIdx = 0;
    let rightIdx = 0;

    // Initial index of merged subarray
    let mergeIdx = lo;

    // Merge temp arrays back into arr[lo..hi]
    while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
        // If left element is smaller than right, copy it to the merged array
        if (leftArr[leftIdx] <= rightArr[rightIdx]) {
            arr[mergeIdx] = leftArr[leftIdx];
            leftIdx++;
        } else {
            // If right element is smaller, copy it to the merged array
            arr[mergeIdx] = rightArr[rightIdx];
            rightIdx++;
        }
        mergeIdx++;
    }

    // Copy the remaining elements of leftArr[], if there are any
    while (leftIdx < leftArr.length) {
        arr[mergeIdx] = leftArr[leftIdx];
        leftIdx++;
        mergeIdx++;
    }

    // Copy the remaining elements of rightArr[], if there are any
    while (rightIdx < rightArr.length) {
        arr[mergeIdx] = rightArr[rightIdx];
        rightIdx++;
        mergeIdx++;
    }
}

export default function mergeSort(arr: number[]): number[] | undefined {
    return merge_sort(arr, 0, arr.length - 1);
}

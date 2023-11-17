function quickSort(arr: number[], start: number, end: number): void {
    // Base case: if the start index is greater or equal to the end index, return
    if (start >= end) {
        return;
    }

    // Partition the array and get the pivot index
    const pivotIndex = partitionArray(arr, start, end);

    // Recursively sort elements before and after pivot
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
}

function partitionArray(arr: number[], start: number, end: number): number {
    // Choose the last element as pivot
    const pivotValue = arr[end];

    // Index of smaller element
    let smallerElementIndex = start - 1;

    // Traverse through each element in the array
    for (let i = start; i < end; ++i) {
        // If current element is smaller than or equal to pivot
        if (arr[i] <= pivotValue) {
            smallerElementIndex++;

            // Swap arr[i] and arr[smallerElementIndex]
            const temp = arr[i];
            arr[i] = arr[smallerElementIndex];
            arr[smallerElementIndex] = temp;
        }
    }

    // Swap arr[smallerElementIndex+1] and arr[end] (or pivot)
    smallerElementIndex++;
    arr[end] = arr[smallerElementIndex];
    arr[smallerElementIndex] = pivotValue;

    return smallerElementIndex;
}

export default function quick_sort(arr: number[]): void {
    quickSort(arr, 0, arr.length - 1);
}

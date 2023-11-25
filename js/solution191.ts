export default function insertion_sort(arr: number[]): void {
    function insert(array: number[], rightIndex: number, value: number): void {
        let i = rightIndex;
        while (i >= 0 && array[i] > value) {
            array[i + 1] = array[i];
            i--;
        }
        array[i + 1] = value;
    }

    for (let i = 1; i < arr.length; i++) {
        const currentValue = arr[i];
        insert(arr, i - 1, currentValue);
    }
}

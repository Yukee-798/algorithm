```ts
function select_sort(arr: number[], l: number, r: number): void {
    for (let i = arr.length - 1; i >= 0; i--) {
        let max: number = -Infinity;
        let indexOfMax = -1;
        for (let j = 0; j <= i; j++) {
            if (arr[j] > max) {
                max = arr[j];
                indexOfMax = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[indexOfMax];
        arr[indexOfMax] = temp;
    }
}
```
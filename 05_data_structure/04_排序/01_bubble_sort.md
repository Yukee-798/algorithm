```ts
function bubble_sort(arr: number[], l: number, r: number): void {
    for (let i: number = r; i >= l; i--) {
        for (let j: number = l; j < r; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
```
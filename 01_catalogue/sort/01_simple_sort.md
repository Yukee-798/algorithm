### bubble_sort
```ts
function bubble_sort(arr: Array<number>, l: number, r: number): Array<number> {
    let max: number = -Infinity;
    for (let i: number = r; i >= l; i--) {
        for (let j: number = l; j < r; j++) {
            if (arr[j] > arr[j + 1]) {
                Util.swap(arr, j, j + 1);
            }
        }
    }
}

```
```java
void bybble_sort(int[] arr, int l, int r) {
    int max = -Integer.MAX_VALUE;
    for (int i = r; i >= l; i--) {
        for (int j = l; j < r; j++) {
            if (arr[j] > arr[j + 1]) {
                Util.swap(arr, j, j + 1);
            }
        }
    }
}
```

### select_sort
```ts

```
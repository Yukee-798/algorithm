原生 api 描述：
```
(method) Array<T>.pop(): T
Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
```

```ts
const pop = <T>(arr: T[]): T => {
    if (arr.length === 0) return undefined;
    else {
        const temp = arr[0];
        for (let i = 0; i <= arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.length--;
        return temp;
    }
}
```
原生 api 描述：
```
(method) Array<T>.push(...items: T[]): number
Appends new elements to the end of an array, and returns the new length of the array.

@param items — New elements to add to the array.
```

```ts
const push = <T>(arr: T[], ...items: T[]): number => {
    for (let i = 0; i < items.length; i++) {
        arr.length++;
        arr[arr.length - 1] = items[i];
    }
    return arr.length;
}
```
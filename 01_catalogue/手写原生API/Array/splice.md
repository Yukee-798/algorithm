原生 api 描述：
```
(method) Array<T>.splice(start: T, deleteCount?: T): T[] (+1 overload)
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount — The number of elements to remove.

@returns — An array containing the elements that were deleted.
```

```ts
const push = <T>(arr: T[], ...items: T[]): number => {
    for (let i = 0; i < items.length; i++) {
        arr.length++;
        arr[arr.length - 1] = items[i];
    }
    return arr.length;
}




const splice = <T>(arr: T[], start: number, deleteCount?: number, ...addedList: T[]): T[] => {
    // 判断传入的参数是否有效
    if (start < 0 || start > arr.length - 1) throw 'invalid start: ' + start;
    else if (deleteCount < 0 || deleteCount > arr.length) throw 'invalid deleteCount: ' + deleteCount;

    const deletedArr: T[] = [];

    // 处理删除元素
    for (let i = start; i <= arr.length - start - deleteCount; i++) {
        if (deletedArr.length < deleteCount) push(deletedArr, arr[i]); // 记录被删除的元素
        arr[i] = arr[i + deleteCount]; // 元素位移(覆盖删除元素)
    }

    // 改变数组长度
    arr.length -= deleteCount;

    // 处理新增元素
    for (let i = 0; i < addedList.length; i++) push(arr, addedList[i]);

    // 返回被删除的元素
    return deletedArr;
}
```
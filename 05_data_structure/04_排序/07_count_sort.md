```ts
const count_sort = (arr: number[]): void => {
    let sortedArr: number[] = [];

    // 初始化 helper
    const helper: number[] = [];
    helper.length = Math.max(...arr) + 1;
    helper.fill(0);

    // 映射
    arr.forEach((value) => {
        helper[value]++;
    });

    // 排序
    helper.forEach((value, index) => {
        let temp = value;
        while (temp !== 0) {
            sortedArr.push(index);
            temp--;
        }
    });

    // 改变原数组引用中保存的值
    arr.forEach((_, index) => {
        arr[index] = sortedArr[index];
    })
}
```
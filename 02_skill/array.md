## 浅拷贝数组
```ts
let arr1 = [1, 2, 3];
let backup1 = [...arr1];

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let backup2 = matrix.map((arr) => [...arr]);
// let backup2 = [[...matrix[0]], [...matrix[1]], [...matrix[2]]];
```
注意：如果 `let backup2 = [...matrix]`，这样 backup2 虽然和 matrix 不是同一个引用，但是其保存的一维数组是同一样的引用。

## 图像化二维数组
二维数组的坐标系原点在矩阵的左上角，`x轴` 朝下，`y轴` 朝右。


## 遍历二维数组
```ts
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

matrix.forEach((arr, i) => {
    arr.forEach((value, j) => {
        console.log(value);
    })
})
```

## 扫描二维数组某一行或某一列

```ts

```




## 有关数组的高阶函数


## 数组去重
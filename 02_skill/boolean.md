## 判断一个变量是否为undefined
```ts
let a;
if (!a) {
    console.log(1);
}

if (a === undefined) {
    console.log(1);
}
```
`!a` 等价于 `a === undefined`
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

## && 和 || 的运用
**前面的表达式为 true 则执行后面的表达式**
```js
let a = 1;
let isAdd = true;

isAdd && a++;

console.log(a);
```
**前面的表达式为 false 则执行后面的表达式**
```ts
let flag = 0;
let isValid = false;

isValid || ++flag;

console.log(flag);
```
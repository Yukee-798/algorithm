## 字符串转字符数组
**解构赋值方式**
```ts
let str = 'hello';
let charArr1 = [...str];
let [...charArr2] = str;
```
**split**
```ts
let charArr3 = str.split('');
```
## 数组转字符串
```ts
let hello = ['h', 'e', 'l', 'l', 'o'].join('');
```
## 字符串去重
```ts
[...new Set('hello')].join('');
Array.from(new Set('hello')).join('');
```
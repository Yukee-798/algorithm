1. `Number.parseInt()` 只会取字符串前面部分的有效整数
```js
Number.parseInt('10px'); // 10
Number.parseInt('11.6'); // 11
```
2. `Number.parseFloat()` 只会取字符串前面部分的有效小数
```js
Number.parseFloat('11.2px'); // 11.2
Number.parseFloat('12px'); // 12
```
3. `Number()` 等价于直接在字符串前面加上 `+`
```js
Number('11.7'); // 11.7
+'11.7' //  11.7
```
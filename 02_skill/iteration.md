## 遍历字符串的所有字符
```ts
const s = 'ASFIWSFSV';

// 使用 for of
for (const char of s) {
    console.log(char);
}

// 不优雅的方法
for (let i = 0; i < s.length; i++) {
    console.log(s.charAt(i));
}
```

## 遍历数组
注意点：
* forEach 里面是一个回调函数，如果在回调函数里面 return，相当于只是 return 这个回调函数！


## 遍历对象的 key 和 value
```ts
const map = {
    A: 1,
    B: 2,
    C: 3
};

// 使用 Object.keys 与 forEach
Object.keys(map).forEach((key) => {
    const k = key;
    const v = map[key];
})

// 使用 for in
// key 是属性名: string
for (let key in map) {
    const k = key;
    const v = map[key];
}
```
## 判断对象中是否存在某个属性
```ts
const obj = { A: 1, B: 1, C: 1 };

// 用 in 关键字
console.log('A' in obj);

// 使用 hasOwnProperty 方法
console.log(obj.hasOwnProperty('A'));

// 使用 undefined 判断
// if(!obj['A']) ：如果 A 不存在 obj 对象中，则执行 if 内容
console.log(obj['A'] !== undefined);
```

## 删除对象中的某个属性
```ts
const obj = { A: 1, B: 1, C: 1 };

delete obj.A;
delete obj['B'];
```
不管是否删除成功，`delete` 表达式返回的均为 ture。

## 获取对象的所有属性、取值、[key, value]
**Object.keys()**
**Object.values()**
**Object.entries()**
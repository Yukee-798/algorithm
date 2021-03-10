## 对象 map 的实现
JS 中使用一个对象 `{}`，可以模拟 map，因为对象的属性名是唯一的，可以看作 `key`，属性的取值可以看作 `value`。
```ts
const s = 'ABCDSWFA';
const map = {};

// s 串映射到 map 中
for (const char of s) {
    if (!(char in map)) {
        map[char] = 1;
    } else {
        map[char]++;
    }
}
```

## 对象 map 的遍历
详见 `02_skill/iteration.md`


## 对象 map 实现 containAll(map2, map1)
判断 map2 是否包含 map1，例如：
```ts
const map1 = {
    A: 1,
    B: 2,
    C: 3
}

const map2 = {
    A: 2,
    B: 2,
    D: 3,
    C: 3
}

// map2 是包含 map1 的，所以返回 true
console.log(containAll(map2, map1));
```
实现：
```ts
function containAll(map2, map1): boolean {
    for (let key in map1) {
        // map1 中的 key 不在 map2 中
        // map1 中的 key 对应 value > map2
        // 上述两种情况都返回 false
        if (!(key in map2) || map1[key] > map2[key]) {
            return false;
        }
    }
    return true;
}
```
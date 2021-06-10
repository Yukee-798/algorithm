原生 api 描述：
```
(method) Function.bind(thisArg: any, ...argArray: any[]): any

For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.

@param thisArg — An object to which the this keyword can refer inside the new function.

@param argArray — A list of arguments to be passed to the new function.
```

```ts
const bind = (targetFun: Function, thisArg: any, ...argArray: any[]): Function => {
    return function () {
        return call(targetFun, thisArg, ...argArray);
    }
}

function call(targetFun: Function, thisArg: any, ...argArray: any[]): any {

    // 如果 thisArg 为空或者undefind 则不必在将 thisArg 绑定为 targetFun 的 this 了
    if (thisArg === null || thisArg === undefined) return targetFun();

    // 用 Symbol 类型 fn 作为 thisArg 的属性，防止命名冲突
    const fn = Symbol();

    // 给 thisArg 绑定 fn 属性指向 targetFun
    thisArg[fn] = targetFun;

    // 用 thisArg 调用 targetFun 并接收返回值
    const res = thisArg[fn](...argArray);

    // 删除刚刚绑定在 thisArg 上的 fn 属性
    delete thisArg[fn];

    // 返回返回值
    return res;
}
```

测试用例：
```ts
function fn(...list: any[]) {
    console.log(this, list);
}
bind(fn, {name: 'kll'}, 1, 2, 3)();
fn();
```


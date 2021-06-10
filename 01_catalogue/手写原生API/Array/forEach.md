原生 api 描述：
```
(method) Array<T>.forEach(callbackfn: (value: T, index: T, array: T[]) => void, thisArg?: any): void
Performs the specified action for each element in an array.

@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
```


```ts
const forEach = <T>(targetArr: T[], callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void => {
    // 为回调指定 this 指向
    if (thisArg) callbackfn = bind(callbackfn, thisArg);

    // 遍历数组，执行回调
    for (let i = 0; i < targetArr.length; i++) {
        callbackfn(targetArr[i], i, targetArr);
    }
}

function bind(targetFun: Function, thisArg: any, ...argArray: any[]): any {
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

```
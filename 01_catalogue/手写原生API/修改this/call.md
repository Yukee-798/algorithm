原生 api 描述：
```
(method) Function.call(thisArg: any, ...argArray: any[]): any
Calls a method of an object, substituting another object for the current object.

@param thisArg — The object to be used as the current object.

@param argArray — A list of arguments to be passed to the method.
```

```ts
const call = (targetFun: Function, thisArg: any, ...argArray: any[]): any => {

    // 如果 thisArg 为空或者undefind 则不必在将 thisArg 绑定为 targetFun 的 this 了
    if (thisArg === null || thisArg === undefined) return targetFun(...argArray);

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
测试案例：
```ts
call(
    function(a: number, b: number) {
        console.log(a + b, this.name);
    }, 
    {name: 'kll'}, 
    1, 2
);
```

> 思考：
> 调用原生的 call 时传入 null，那么目标函数打印 this 时会变成 null，目前还不知道怎么实现这个功能
原生 api 描述：
```
(method) Function.apply(thisArg: any, argArray?: any[]): any
Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

@param thisArg — The object to be used as the this object.

@param argArray — A set of arguments to be passed to the function.
```

```ts
const apply = (targetFun: Function, thisArg: any, argArray?: any[]): any => {

    // 判空，直接调用，不用绑定 this
    if (thisArg === null || thisArg === undefined) return targetFun(...argArray);

    // 用 Symbol 设置属性名，防止属性名冲突
    const fn = Symbol();
    
    // 给 thisArg 绑定 targetFun 方法
    thisArg[fn] = targetFun;
    
    // 调用获取返回值
    const res = thisArg[fn](...argArray);

    // 删除 thisArg 绑定的 targetFun
    delete thisArg[fn];

    // 返回返回值
    return res;
}
```

测试案例：
```ts
apply(
    function(a: number, b: number) {
        console.log(a + b, this.name);
    }, 
    {name: 'kll'}, 
    [1, 2]
);
```
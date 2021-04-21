
const s = "123+11-1230"

enum Operators {
    '+' = '+',
    '-' = '-',
    '(' = '(',
    ')' = ')',
}
// 123 + 32

// 0 + 1, 10 + 2, 120 + 3

// ['/', '/', 123, '+', '/', 32]
let num = 0;
let pow = 0;
const ex = Array.from(s).map((char, index) => {

    if (!(char in Operators)) { // 如果扫描到的是数字
        if (num === 0) num += (+char);
        else {
            num **= (10 * pow);
            num += (+char);
        }
        // while 循环后 pow 为多少说明循环了多少次
        pow++;

        // 如果 char 的后一位仍然是数字
        if (!(s[index + 1] in Operators) && s[index + 1] !== undefined) {
            return '/';
        } else {

            return num;
        }
    } else { // 如果扫描到的是字符
        pow = 0;
        num = 0;
        return char;
    }

    // if (pow === 1) { // pow 为1 说明扫描到的是单个数字
    //     return num;
    // } else if (pow === 0) { // pow 为 0 说明扫描到的不是数字
    //     return char;
    // }
    // return pow === 1 ? ;
}).filter((value) => value !== '/');


// console.log(ex);
// const a: any[] = [];
// console.log(a[2]);


const a = [1, 2, 3].filter((e) => e === 1)
// console.log(a);

// 求两个集合的差集
const defference = <T>(a: Set<T>, b: Set<T>) => {
    return new Set(Array.from(a).filter((x => !b.has(x))));
}

// console.log(defference(new Set([1, 2, 3]), new Set([2])));
// console.log([1,2,3].find((value) => value === 0));
const arr = [1, 2, 3];
const isContainTwo = !!(arr.find((value) => value === 2));
// console.log(isContainTwo);


const arr2 = {
    '-1': {
        name: 'tutu'
    },
    '1': {
        name: 'bobo'
    },
    '2': {
        name: 'didi'
    },
    '3': {
        name: 'huhu'
    }
}

// import * as fs from 'fs';
import * as path from 'path';


const fs = require('fs');

const pfs = fs.promises;


const fileHelper = {
    readFile: (path: string) => {
        return pfs.readFile(path, { encoding: 'utf8' });
    },
    writeFile: (path: string, content: string) => {
        return pfs.writeFile(path, content, { encoding: 'utf8' });
    },
    renameFile: (path: string, newPath: string) => {
        return pfs.rename(path, newPath);
    },
    deleteFile: (path: string) => {
        return pfs.unlink(path);
    }
};


// fileHelper.readFile(readPath)
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((reason) => {
//         console.log(reason);
//     })

// const writePath = path.join(__dirname, 'hello.md');

// fileHelper.writeFile(writePath, 'momomomomomomo')
//     .then((value: any) => {
//         console.log(value);
//     })
//     .catch((err: any) => {
//         console.log(err);
//     })


export const judgeSetEqual = (set1: Set<any>, set2: Set<any>) => {
    for (const value of set1) {
        if (!set2.has(value)) {
            return false;
        }
    }

    for (const value of set2) {
        if (!set1.has(value)) {
            return false;
        }
    }

    return true;
}




const facSum = (n: number): number => {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        res += fac(i);
    }

    return res;
}

const fac = (n: number): number => {
    let res = 1;
    for (let i = n; i >= 1; i--) {
        res *= i;
    }
    return res;
}

// console.log(facSum(4));



const abc = "2021-02-06T09:51:06.662Z";

// console.log(abc.split('T')[0] + ' ' + abc.split('T')[1].substring(0, 8));


interface IFile {
    id: string;
    title: string | undefined;
    body: string;
    createAt: number;
    path: string;
}

let files: IFile[] = [
    {
        id: Math.random() + '',
        body: '123',
        title: 'Node.js',
        createAt: 1316415757916,
        path: path.join('SAVE_LOCATION', 'Node.js')
        // status: {
        //     isOpen: true,
        //     isUnsave: false,
        //     isActive: true
        // }
    },
    {
        id: Math.random() + '',
        body: '456',
        title: 'Promise',
        createAt: 1216415757916,
        path: path.join('SAVE_LOCATION', 'Promise')
        // status: {
        //     isOpen: false,
        //     isUnsave: true,
        //     isActive: false
        // }
    },
    {
        id: Math.random() + '',
        body: '789',
        title: 'Node',
        createAt: 1416415757916,
        path: path.join('SAVE_LOCATION', 'Node')
        // status: {
        //     isOpen: true,
        //     isUnsave: false,
        //     isActive: false
        // }
    },
    {
        id: Math.random() + '',
        body: '## webpack \n test  webpack  webpack webpack webpack webpack webpack webpack webpack webpack webpack webpack webpack',
        title: 'webpack',
        createAt: 1116415757916,
        path: path.join('SAVE_LOCATION', 'webpack')
        // status: {
        //     isOpen: true,
        //     isUnsave: false,
        //     isActive: false
        // }
    },
    {
        id: Math.random() + '',
        body: '## React.js \n test test testest testtest testtest testtest testtest testtest testtest testt testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest test',
        title: 'React.js',
        createAt: 1016415757916,
        path: path.join('SAVE_LOCATION', 'React.js')
        // status: {
        //     isOpen: true,
        //     isUnsave: false,
        //     isActive: false
        // }
    },
    {
        id: Math.random() + '',
        body: '## Vue.js \n 12312 Vue vvvvvvvvvvvvsv test testtesttesttesttesttesttesttesttesttesttest',
        title: 'Vue.js',
        createAt: 1916415757916,
        path: path.join('SAVE_LOCATION', 'Vue.js')
        // status: {
        //     isOpen: true,
        //     isUnsave: false,
        //     isActive: false
        // }
    },
    {
        id: Math.random() + '',
        body: '## Next.js \n asd 1asd next 3412412e2next next next next next next next next next next next next next next next ',
        title: 'Next.js',
        createAt: 1216215747916,
        path: path.join('SAVE_LOCATION', 'Next.js')
        // status: {
        //     isOpen: true,
        //     isUnsave: false,
        //     isActive: false
        // }
    },
];


const flattenFiles = (files: IFile[]) => {
    return files.reduce((res, current) => {
        return { ...res, [current.id]: current }
    }, {});
}


export type IFileList = {
    [key: string]: IFile;
}

const recoverFiles = (files: IFileList) => {
    return Object.keys(files).map((id: string) => (files[id]));
}

// console.dir(recoverFiles(flattenFiles(files)));

// console.dir(flattenFiles(files));


const aaasd = {
    name: '123',
    sex: 1,
    arr: [1, '2', 3]
};



const temp123 = JSON.stringify(aaasd)
// console.log(temp123);
// console.dir(JSON.parse(temp123));



// console.dir(sss);




const set: Set<number> = new Set([1, 2, 3]);
set.add(1);
// console.log(set.);

let sa: any = {
    '1231': '123',
    '2312': '3232'
}

sa['1412'] = '23123';

// console.dir(Object.keys(sa).map((item) => ({[item]: sa[item]})));



const arsssr = [
    {
        name: 'kll',
        age: '12'
    },
    {
        name: 'mll',
        age: '15'
    },
    {
        name: 'dll',
        age: '10'
    },
];

const sortByKey = <T>(arr: T[], key: keyof T, dirction: 1 | 0) => {
    return arr.sort((a, b) => (dirction ? +a[key] - +b[key] : +b[key] - + a[key]));
}

function assign(source: any) {
    return function (target: any) {

        Object.keys(source).forEach((key) => {
            target.prototype[key] = source[key];
        })

        // console.log(target.prototype);
    }
}

const source = { a: 1, b: 2, c: 3 };

@assign(source)
class MyClass { }

const target: any = new MyClass();
// console.log(target);

const person = {
    call() { },
    name: '123'
}


const arr3 = [1, 2, 3], arr4 = [4, 5, 6];
const arr5 = [...arr3, ...arr4];
let flag = 0;
let isValid = false;

isValid || ++flag;



const push = <T>(arr: T[], ...items: T[]): number => {
    for (let i = 0; i < items.length; i++) {
        arr.length++;
        arr[arr.length - 1] = items[i];
    }
    return arr.length;
}



const splice = <T>(arr: T[], start: number, deleteCount?: number, ...addedList: T[]): T[] => {
    // 判断传入的参数是否有效
    if (start < 0 || start > arr.length - 1) throw 'invalid start: ' + start;
    else if (deleteCount < 0 || deleteCount > arr.length) throw 'invalid deleteCount: ' + deleteCount;

    const deletedArr: T[] = [];

    // 处理删除元素
    for (let i = start; i <= arr.length - start - deleteCount; i++) {
        if (deletedArr.length < deleteCount) push(deletedArr, arr[i]); // 记录被删除的元素
        arr[i] = arr[i + deleteCount]; // 元素位移(覆盖删除元素)
    }

    // 改变数组长度
    arr.length -= deleteCount;

    // 处理新增元素
    for (let i = 0; i < addedList.length; i++) push(arr, addedList[i]);

    // 返回被删除的元素
    return deletedArr;
}


const arr10 = [1, 2, 3, 4, 5];
// arr10.map()

// arr10.forEach


/* 
    设计思路：
        1. 函数的 this，表示调用这个函数的对象
        2. 那么在调用 call 之后，使用该对象来调用原来的方法，这个方法的 this 就会被改变

*/



const call = (targetFun: Function, thisArg: any, ...argArray: any[]): any => {

    // 如果 thisArg 为空或者undefind 则不必在将 thisArg 绑定为 targetFun 的 this 了
    if (thisArg === null || thisArg === undefined) return targetFun();

    // 用 Symbol 类型 fn 作为 thisArg 的属性，防止命名冲突
    const fn = Symbol();

    // 给 thisArg 绑定 fn 属性指向 targetFun
    thisArg[fn] = targetFun;

    // 用 thisArg 调用 targetFun 并接收返回值
    const res = thisArg[fn](...[argArray]);

    // 删除刚刚绑定在 thisArg 上的 fn 属性
    delete thisArg[fn];

    // 返回返回值
    return res;
}



call.apply




const forEach = <T>(arr: T[], callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void => {
    if (thisArg) {
        callbackfn = callbackfn.bind(thisArg);
    }
    for (let i = 0; i < arr.length; i++) {
        callbackfn(arr[i], i, arr);
    }
}


const map = <T>(callbackfn: (value: T, index: number, array: T[]) => unknown, thisAny?: any) => {
    console.log(this);
}






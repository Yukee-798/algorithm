
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



// const call = (targetFun: Function, thisArg: any, ...argArray: any[]): any => {

//     // 如果 thisArg 为空或者undefind 则不必在将 thisArg 绑定为 targetFun 的 this 了
//     if (thisArg === null || thisArg === undefined) return targetFun();

//     // 用 Symbol 类型 fn 作为 thisArg 的属性，防止命名冲突
//     const fn = Symbol();

//     // 给 thisArg 绑定 fn 属性指向 targetFun
//     thisArg[fn] = targetFun;

//     // 用 thisArg 调用 targetFun 并接收返回值
//     const res = thisArg[fn](...argArray);

//     // 删除刚刚绑定在 thisArg 上的 fn 属性
//     delete thisArg[fn];

//     // 返回返回值
//     return res;
// }






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


// forEach([3, 2, 1, 0], function(item, index, arr) {
//     console.log( item, index, arr);
// }, {name: 'kll'});


function fn(...list: any[]) {
    console.log(this, list);
}
// bind(fn, { name: 'kll' }, 1, 2, 3, 4)(1, 2, 3, 4);
// fn.bind({ name: 'kll' }, 1, 2, 3)(1, 2, 3, 4)


const map = <T>(callbackfn: (value: T, index: number, array: T[]) => unknown, thisAny?: any) => {
    console.log(this);
}


function randomNum(start: number, end: number): number {
    return +(Math.random() * (end - start) + start).toFixed(0);
}


// console.log(randomArr());

let str = 'hello';
let charArr1 = [...str];
let [...charArr2] = str;

// console.log(str.split(''));

const arw = [3, 2, 2, 1, 0, 9];

const helper: any[] = [];
helper.length = Math.max(...arw) + 1;
helper.fill(0);
arw.forEach((value) => {
    helper[value]++;
})

const ans: any = [];
helper.forEach((value, index) => {
    let temp = value;
    while (temp !== 0) {
        ans.push(index);
        temp--;
    }
})

// console.log(ans);


const count_sort = (arr: number[]): void => {
    let sortedArr: number[] = [];

    // 初始化 helper
    const helper: number[] = [];
    helper.length = Math.max(...arr) + 1;
    helper.fill(0);

    // 映射
    arr.forEach((value) => {
        helper[value]++;
    });

    // 排序
    helper.forEach((value, index) => {
        let temp = value;
        while (temp !== 0) {
            sortedArr.push(index);
            temp--;
        }
    });

    arr.forEach((_, index) => {
        arr[index] = sortedArr[index];
    })
}


// count_sort(arw)
// console.log(arw);

// const awbw = 'ABCD';
// for (let i = 0; i < awbw.length; i++) {
//     console.log(awbw.charCodeAt(i));
//     console.log(String.fromCharCode(awbw.charCodeAt(i)));
// }


function isUnique(astr: string): boolean {

    // 初始化 ASCII 映射表
    const asciiMap: number[] = [];
    asciiMap.length = 128;
    asciiMap.fill(0);
    for (let i = 0; i < astr.length; i++) {
        asciiMap[astr.charCodeAt(i)]++;
        if (asciiMap[astr.charCodeAt(i)] > 1) return false;
    }
    return true;
};


function bubble_sort(arr: Array<number>, l: number, r: number): void {
    let max: number = -Infinity;
    for (let i: number = r; i >= l; i--) {
        for (let j: number = l; j < r; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function select_sort(arr: number[], l: number, r: number): void {
    for (let i = arr.length - 1; i >= 0; i--) {
        let max: number = -Infinity;
        let indexOfMax = -1;
        for (let j = 0; j <= i; j++) {
            if (arr[j] > max) {
                max = arr[j];
                indexOfMax = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[indexOfMax];
        arr[indexOfMax] = temp;
    }
}

const aaaw = [2, 3, 4, - 1];
// select_sort(aaaw, 0, 3)
// console.log(aaaw);

// console.log([1, 3, 2, 1].slice());

// console.log(((1 << 30) - 1) * 2 + 1);
// console.log(-(1 << 30) * 2);
function reverse(x: number): number {
    let flag = x >= 0 ? 1 : -1;
    x = flag === 1 ? x : -x;

    let ans: number = 0;
    while (x > 0) {
        let i = x % 10;
        x = Number.parseInt((x / 10) + '');
        ans = ans * 10 + i;
    }

    if (ans < -2147483648 || ans > 2147483647) {
        return 0;
    }

    return flag === 1 ? ans : -ans;
};

// console.log(reverse(-123));

// console.log(123 / 10);

// console.log(Number.parseFloat('11px'));
// console.log(Number('11.8888888px'));
// console.log(+'11.8888888');
// const data = new Array(5);
// console.log(data);

const testlize = <T>(binaryTree: T[]) => {
    binaryTree.forEach((item, i, arr) => {
        if (item as unknown === '#') {
            arr[i] = null;
        }
    })
}

// const binaryTree = [1, 2, 3, '#', 4, '#', 5, '#', '#', 6, '#', '#', '#', 7, '#']

// testlize(binaryTree);


export function log(base: number, truth: number) {
    return Math.log(truth) / Math.log(base)
}

/** 获取传入结点的父结点数据值 */
export function getFatherValue<T>(binaryTree: T[], indexOfNode: number) {
    return binaryTree[Math.floor((indexOfNode - 1) / 2)];
}

/** 获取传入结点的左孩子数据值 */
export function getLChildValue<T>(binaryTree: T[], indexOfNode: number) {
    return binaryTree[indexOfNode * 2 + 1];
}

/** 获取传入结点的右孩子数据值 */
export function getRChildValue<T>(binaryTree: T[], indexOfNode: number) {
    return binaryTree[indexOfNode * 2 + 2]
}

/** 为传入的结点设置左孩子 */
export function setLChild<T>(binaryTree: T[], indexOfNode: number, lChild: T) {
    const root = binaryTree[indexOfNode];
    if (root) binaryTree[indexOfNode * 2 + 1] = lChild;
    else throw 'node is null';
}

/** 为传入的结点设置右孩子 */
export function setRChild<T>(binaryTree: T[], indexOfNode: number, rChild: T) {
    const root = binaryTree[indexOfNode];
    if (root) binaryTree[indexOfNode * 2 + 2] = rChild;
    else throw 'node is null';
}

/** 根据传入的下标获取结点所在的二叉树层数 */
export function getDeepthByNodeIndex(indexOfNode: number) {
    return Math.floor(log(2, indexOfNode + 1));
}

/** 随机生成结点数为n的二叉树 */
function binaryTreeGenerator(n: number, binaryTree: (number | null)[], indexOfRoot: number) {
    if (n == 0) return;

    // 获取当前结点的值
    const curV = binaryTree[indexOfRoot] as number;
    // 获取当前结点的父结点值
    let curFatherV = getFatherValue(binaryTree, indexOfRoot) || 80;

    // 生成左孩子值：小于当前结点值
    const lChildV = randomNum(1, curV - 1);
    // 生成右孩子值：大于当前结点，小于当前结点的父结点
    const rChildV = randomNum(curV + 1, curFatherV);

    // 根结点的左子树的结点个数
    const leftN = randomNum(0, n - 1);
    const rightN = n - leftN - 1;

    // 递归建立每棵子树
    setLChild(binaryTree, indexOfRoot, leftN > 0 ? lChildV : null);
    binaryTreeGenerator(leftN, binaryTree, indexOfRoot * 2 + 1)

    setRChild(binaryTree, indexOfRoot, rightN > 0 ? rChildV : null);
    binaryTreeGenerator(rightN, binaryTree, indexOfRoot * 2 + 2)
}

/** 生成层数小于3且结点数在 5 ～ 15 的二叉树 */
export function randomBinaryTree(): (number | null)[] {
    let cache = new Array(500);
    // 如果生成的二叉树的层数大于了3则重新生成
    while (getDeepthByNodeIndex(cache.length - 1) > 3) {
        cache.fill(null);
        cache[0] = randomNum(32, 54);
        binaryTreeGenerator(randomNum(5, 15), cache, 0);

        // 找到 cache 中最后一个不为 null 的元素的下标
        for (let i = 500; i >= 0; i--) {
            if (cache[i] !== null) {
                cache.length = i + 1;
                break;
            }
        }
    }
    return cache;
}


// console.log(randomBinaryTree());

/** 为二叉搜索树添加结点 */
// export function addForBST(bts: any[], indexOfRoot: number, nodeV: number) {
//     // 传入的 bts 必须有一个根结点
//     if (bts.length === 0) throw 'the length of bts is 0';

//     if (!bts[indexOfRoot]) return;

//     // 判断传入结点的值和当前子树根结点的值的关系
//     if (nodeV > bts[indexOfRoot]) {
//         // 当前结点的右孩子不存在，则直接挂上去
//         if (!getRChildValue(bts, indexOfRoot)) {
//             setRChild(bts, indexOfRoot, nodeV);
//         } else {
//             addForBST(bts, indexOfRoot * 2 + 2, nodeV);
//         }
//     } else {
//         // 当前结点的左孩子不存在，则直接挂上去
//         if (!getLChildValue(bts, indexOfRoot)) {
//             setLChild(bts, indexOfRoot, nodeV);
//         } else {
//             addForBST(bts, indexOfRoot * 2 + 1, nodeV);
//         }
//     }
// }


/** 为二叉搜索树添加结点 */
export function addToBST(bts: any[], indexOfRoot: number, nodeV: number) {
    // 传入的 bts 必须有一个根结点
    if (bts.length === 0) throw 'the length of bts is 0';

    if (!bts[indexOfRoot]) return;

    // 判断传入结点的值和当前子树根结点的值的关系
    if (nodeV > bts[indexOfRoot]) {
        // 当前结点的右孩子不存在，则直接挂上去
        if (!getRChildValue(bts, indexOfRoot)) {
            setRChild(bts, indexOfRoot, nodeV);
        } else {
            addToBST(bts, indexOfRoot * 2 + 2, nodeV);
        }
    } else {
        // 当前结点的左孩子不存在，则直接挂上去
        if (!getLChildValue(bts, indexOfRoot)) {
            setLChild(bts, indexOfRoot, nodeV);
        } else {
            addToBST(bts, indexOfRoot * 2 + 1, nodeV);
        }
    }
}

/** 生成二叉搜索树结点数在 5 ~ 15，且层数小于3的二叉搜索树 */
export function arrayToBST() {
    // 初始化 cache
    let cache = new Array(500);

    // 如果生成的二叉搜索树的层数大于了3则重新生成
    while (getDeepthByNodeIndex(cache.length - 1) > 3) {
        const arr = randomArr(randomNum(5, 15));
        cache.fill(null);
        cache[0] = randomNum(30, 50);

        // 用 arr 向 cache 中添加结点
        arr.forEach((value) => {
            addToBST(cache, 0, value)
        })

        // 找到 cache 中最后一个不为 null 的元素的下标
        for (let i = 500; i >= 0; i--) {
            if (cache[i] !== null) {
                cache.length = i + 1;
                break;
            }
        }
    }
    return cache;
}

// console.log(arrayToBST());

// /** 用传入的数组生成二叉搜索树 */
// export function arrayToBST(arr: number[]) {
//     const bst: any = [];
//     bst[0] = randomNum(30, 50);
//     arr.forEach((value) => {
//         addForBST(bst, 0, value)
//     })
//     return bst;
// }

/** 随机生成指定长度的数组 */
export function randomArr(length: number): number[] {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(randomNum(3, 40));
    }
    return arr;
}


function treeToString(binaryTree: (number | null)[]) {
    return '[' + binaryTree.map((value) => !value ? 'null' : value).toString() + ']'
}

// arr.forEach((v, i) => {
//     console.log(v, i);
// })
// wsws = wsws.map((value) => !value ? null : value)
// console.log(wsws[5]);


const binaryTree = [32, 27, 56, 20, 30, 54, null, 19, 21, 28, 31, null, 55];
// [27, 20, 30, 19, 21, 28, 31]

const floorTrav = (binaryTree: (number | null)[], indexOfRoot: number) => {
    const queue: any[] = [];
    const trav: any[] = [];

    if (binaryTree.length !== 0) {
        queue.push({ value: binaryTree[indexOfRoot], index: indexOfRoot });   //根节点进队列
    }
    //队列不为空判断
    while (queue.length !== 0) {

        const lChildV = getLChildValue(binaryTree, queue[0].index);
        const rChildV = getRChildValue(binaryTree, queue[0].index);

        //如果有左孩子，leftChild入队列
        if (lChildV || lChildV === 0) {
            queue.push({ value: lChildV, index: queue[0].index * 2 + 1 })
        }

        //如果有右孩子，rightChild入队列
        if (rChildV || rChildV === 0) {
            queue.push({ value: rChildV, index: queue[0].index * 2 + 2 })
        }
        //已经遍历过的节点出队列
        trav.push(queue.shift())
    }
    return trav;
}

// console.log(floorTrav(binaryTree, 1));


// console.log(/\[\s*\]/g.test(''));


let arrrs = [1, 2, 3, 4, 4,3];

const judgeSorted = (arr: number[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false
    }

    return true
}

export function getFatherIndex(indexOfNode: number) {
    return Math.floor((indexOfNode - 1) / 2);
}

// console.log(judgeSorted(arrrs));

// console.log(getFatherIndex(0));

export function swap<T>(arr: T[], i1: number, i2: number) {
    const temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

function addToBh(binaryHeap: number[], nodeV: number) {
    // 二叉堆中插入元素
    binaryHeap.push(nodeV);

    // 该新结点的下标
    let nodeIndex = binaryHeap.length - 1;
    // 获取该新结点的父结点
    let fatherIndex = getFatherIndex(nodeIndex);

    // 如果该父结点存在，且父结点的值小于这个新结点，则交换它们的位置 
    while (fatherIndex >= 0 && binaryHeap[fatherIndex] < binaryHeap[nodeIndex]) {
        swap(binaryHeap, fatherIndex, nodeIndex);

        // 更新该结点下标
        nodeIndex = fatherIndex;
        // 更新该结点的父结点下标
        fatherIndex = getFatherIndex(nodeIndex);
    }
}

const binaryHeap: number[] = [];

[3,2,0,10,32,12,42].forEach((value) => {
    addToBh(binaryHeap, value)
})

// console.log(binaryHeap);


const radioGroup = [0, 1, 1];
const lets = radioGroup.reduceRight<number>((preV, curV, curI) => ((curV as number) === 1 ? curI : curI - 1), 2)
// console.log(lets);


let newValues = [1, 2, 3]


// newValues.splice(3, 0, 10);
// console.log(newValues);

function getSubTree(binaryTree: (number | null)[], indexOfNode: number) {
    const queue: any[] = [];
    const subTree: any[] = [];

    if (binaryTree.length !== 0) {
        queue.push({ value: binaryTree[indexOfNode], index: indexOfNode });   //根节点进队列
    }
    //队列不为空判断
    while (queue.length !== 0) {

        const lChildV = getLChildValue(binaryTree, queue[0].index);
        const rChildV = getRChildValue(binaryTree, queue[0].index);

        //如果有左孩子，leftChild入队列
        if (lChildV || lChildV === 0) {
            queue.push({ value: lChildV, index: queue[0].index * 2 + 1 })
        }

        //如果有右孩子，rightChild入队列
        if (rChildV || rChildV === 0) {
            queue.push({ value: rChildV, index: queue[0].index * 2 + 2 })
        }
        //已经遍历过的节点出队列
        subTree.push(queue.shift())
    }
    return subTree;
}
// [32, 27, 56, 20, 30, 54, null, 19, 21, 28, 31, null, 55]

// console.log(getSubTree([32, 27, 56, 20, 30, 54, null, 19, 21, 28, 31, null, 55], 2));


// get([32, 27, 56, 20, 30, 54, null, 19, 21, 28, 31, null, 55], 2)

function get(bst: any[], targetIndex: number) {
    // 获取删除结点的子结点
    const childIndex = getChildrenIndexes(bst, targetIndex)[0] || getChildrenIndexes(bst, targetIndex)[1];
    // 获取以这个子结点为根结点的子树的所有结点下标 (待移动的下标)
    const oldSortIndexes = getSubTree(bst, childIndex).map((item) => item.index);
    // 获取这些待移动下标的目的坐标
    const targetIndexes = getSubTree(bst, childIndex).map((item, i) => {
        // 如果是第一个元素，则直接移动到 targetIndex
        if (i === 0) return targetIndex
        // 如果是父结点的左孩子，则移动到 targetIndex * 2 + 1
        else if (item.dir === 'l') {
            return targetIndex * 2 + 1
        }
        // 如果是父结点右孩子，则移动到 targetIndex * 2 + 2
        else {
            return targetIndex * 2 + 2
        }
    })
    console.log(oldSortIndexes);
    console.log(targetIndexes);
}

/** 获取传入结点子结点下标 */
export function getChildrenIndexes(binaryTree: (number | null)[], indexOfNode: number) {
    let indexes: any[] = [undefined, undefined];
    if (getLChildValue(binaryTree, indexOfNode)) indexes[0] = indexOfNode * 2 + 1;
    if (getRChildValue(binaryTree, indexOfNode)) indexes[1] = indexOfNode * 2 + 2;
    return indexes;
}


function isNum(value: any) {
    return typeof value === 'number' && !isNaN(value);
}

console.log(isNum({}));










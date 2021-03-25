
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

import * as fs from 'fs';
import * as path from 'path';

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

const writePath = path.join(__dirname, 'hello.md');

// fileHelper.writeFile(writePath, 'momomomomomomo')
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((err) => {
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

console.log(judgeSetEqual(new Set([1, 2, 3, 4]), new Set([2, 3, 1])));

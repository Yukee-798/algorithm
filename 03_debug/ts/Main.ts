import Util from './Util';
function bubble_sort(arr: Array<number>, l: number, r: number): void {
    let max: number = -Infinity;
    for (let i: number = r; i >= l; i--) {
        for (let j: number = l; j < r; j++) {
            if (arr[j] > arr[j + 1]) {
                Util.swap(arr, j, j + 1);
            }
        }
    }
}


function select_sort(arr: Array<number>, l: number, r: number): void {
    for (let i: number = r; i >= l; i--) {
        let max: number = -Infinity;
        let indexOfMax = -1;
        for (let j: number = l; j <= i; j++) {
            if (arr[j] > max) {
                max = arr[j];
                indexOfMax = j;
            }
        }
        Util.swap(arr, indexOfMax, i);
    }
}


// function minWindow(s: string, t: string): string {
//     // 映射t串
//     let map1 = {};
//     for (const s of t) {
//         map1[s]++;
//     }
// };



// let map1 = {};
// for (const s of t) {
//     if (!map1[s]) {
//         map1[s] = 1;
//     } else {
//         map1[s]++;
//     }
// }

// console.log(map1);

const s = 'ADOBECODEBANC';
const t = 'ABC';


function minWindow(s: string, t: string): string {

    // 映射t串
    let map1 = {};

    for (const char of t) {
        if (!map1[char]) {
            map1[char] = 1;
        } else {
            map1[char]++;
        }
    }

    // 窗口
    let map2 = {};

    // 记录最短的窗口端点
    let l = -1, r = -1;
    let minLen = s.length + 1;



    let start = 0;
    for (let end = 0; end <= s.length - 1; end++) {

        // end当前指向的字符
        let char1 = s.charAt(end);

        // 右端点添加元素
        if (!map2[char1]) {
            map2[char1] = 1;
        } else {
            map2[char1]++;
        }

        console.log(map2);
        console.log(map1);
        console.log(containAll(map2, map1));

        // 左端点收缩
        // 条件：map2 中包含了 map1 中所有元素及其个数
        while (containAll(map2, map1)) {
            // console.log(1);

            // map2 包含了 map1 所有元素，则此时记录窗口的长度和端点坐标
            if ((end - start + 1) < minLen) {
                minLen = end - start + 1;
                l = start;
                r = end;
            }

            // 左端点右移

            // start当前指向的字符
            let char2 = s.charAt(start);

            // 收缩的同时还要去掉左端点抛出的元素
            if (char2 in map1 && map2[char2] === 0) {
                delete map2[char2];
            } else if (char2 in map1) {
                map2[char2]--;
            }
            start++;
        }
    }
    return s.substring(l, r+1);
};


/* 
const s = 'ADOBECODEBANC';
const t = 'ABC';
*/

// console.log(minWindow(s, t));


// console.log(containAll({ 'A': 1, B: 1, D: 1 }, { A: 1, B: 1, C: 1 }));



function containAll(map2, map1): boolean {
    let falg = 0;
    // 遍历 map1
    Object.keys(map1).forEach((key) => {

        // 同一个key对应的value，map1大于map2，则map2没有包含完
        if (map1[key] > map2[key] || !map2[key]) {
            falg = 1;
        }
    });
    return falg === 0;
}


// const ss = 'ASFIWSFSV';

// // 使用 for of
// for (const char of ss) {
//     console.log(char);
// }




// console.log(minWindow2(s, t));

function minWindow2(s: string, t: string): string {
    const map = {};
    let l = -1, r = -1;
    let minLen = s.length + 1;

    // 记录 map 中 key 的种类
    let keyTypes = 0;

    for (const char of t) {
        if (!(char in map)) {
            map[char] = 1;
            keyTypes++;
        } else {
            map[char]++;
        }
    }

    
    let start = 0;
    // 开滑！
    for (let end = 0; end < s.length; end++) {

        console.log(map);
        console.log(keyTypes);

// const s = 'ADOBECODEBANC';
// const t = 'ABC';

        // end 指向的字符
        const eChar = s.charAt(end);
        if (eChar in map) {
            map[eChar]--;

            if (map[eChar] === 0) {
                keyTypes--;
            }
        }


       

        while (keyTypes === 0) {
            if ((end - start + 1) < minLen) {
                minLen = end - start + 1;
                l = start;
                r = end;
            }

            start++;
            if (s.charAt(start) in map) {
                map[s.charAt(start)]++;
                if (map[s.charAt(start)] > 0) {
                    keyTypes++;
                }
            }
            
        }
    }
    return s.substring(l, r + 1);
};



// s = "(1+(4+5+2)-3)+(6+8)"


// type operators = '+' | '-' | '(' | ')';
enum Operators {
    '+' = '+',
    '-' = '-',
    '(' = '(',
    ')' = ')',
}
function calculate(s: string): number {

    // 用来存放操作符的栈
    const opStack: Operators[] = [];

    // 用来存放后缀表达式的栈
    const postfixStack: string[] = [];

    // 遍历 s
    for (const char of s) {
        // 如果 char 是数字则直接放在后缀栈中
        if (!(char in Operators)) {
            postfixStack.push(char);
        } else {
            // 如果是操作符则需要放到 opStack 中
            // 1. 如果 opStack 为空，则直接放
            if (opStack.length === 0) {
                opStack.push(<Operators>char);
            } else if (
                // 2.
            )
        }
    }
};







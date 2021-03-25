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
    let map1: {[key: string]: any} = {};

    for (const char of t) {
        if (!map1[char]) {
            map1[char] = 1;
        } else {
            map1[char]++;
        }
    }

    // 窗口
    let map2: { [key: string]: any } = {};

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



function containAll(map2: { [key: string]: any }, map1: { [key: string]: any }): boolean {
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
    const map: {[key: string]: any} = {};
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



const ss = "(1+(4+5+2)-3)+(6+8)"


// type operators = '+' | '-' | '(' | ')';
enum Operators {
    '+' = '+',
    '-' = '-',
    '(' = '(',
    ')' = ')',
}


/* 
    目前只能计算个位数字。。。。
*/


console.log(calculate('1+2-3+4'));

function calculate(s: string): number {

    // 得到后缀表达式
    const postfix = getPostifxEx(s);

    // 计算后缀表达式
    const stack: number[] = [];

    // console.log(postfix);
    for (const char of postfix) {


        // 如果遍历到的字符是数字，则stack push
        if (!isNaN(Number(char))) {
            stack.push(Number(char));
        } else {
            // 弹两个元素出来计算
            const num1 = stack.pop();
            const num2 = stack.pop();

            if (char === Operators['+']) {
                // 计算后的值放回去
                stack.push(num2 + num1);
            } else {
                stack.push(num2 - num1);
            }
        }
    }
    return stack[0];
};






function getPostifxEx(s: string): string[] {


    const ex = Array.from(s).map((char) => {
        if (!(char in Operators)) {
            return +char;
        }
        return s;
    })

    // 用来存放操作符的栈
    const opStack: Operators[] = [];

    // 用来存放后缀表达式的栈
    const postfixStack: string[] = [];

    // 遍历 s
    for (const char of s) {
        if (char === ' ') continue;
        // 如果 char 是数字则直接放在后缀栈中
        if (!(char in Operators)) {
            postfixStack.push(char);
        } else {

            

            // opStack 的栈顶元素
            let opStackTop = opStack[opStack.length - 1];

            // 1. 如果 opStack 为空、char 是左括号、opStack 栈顶是左括号则直接放
            let condition1 = !opStackTop || char === Operators['('] || opStackTop === Operators['('];
            // 2. 如果 opStack 栈顶元素为 + 或者 - 并且 char 也是 + 或者 - ，则弹栈到后缀栈中
            let condition2 = (char === Operators['+'] || char === Operators['-']) && (opStackTop === Operators['+'] || opStackTop === Operators['-']);
            // 3. 如果 char 是右括号，则一直弹栈到左括号结束
            let condition3 = char === Operators[')'] && opStackTop !== Operators['('];



            // 如果是操作符则需要放到 opStack 中
            
            if (condition1) {
                opStack.push(<Operators>char);
                opStackTop = opStack[opStack.length - 1];
            }


           
            else if (condition2) {
                while ((char === Operators['+'] || char === Operators['-']) && (opStackTop === Operators['+'] || opStackTop === Operators['-'])) {
                    postfixStack.push(opStack.pop());
                    opStackTop = opStack[opStack.length - 1];
                }
                // 将 char push 入 opStack
                opStack.push(<Operators>char);
                opStackTop = opStack[opStack.length - 1];
            }

            else if (condition3) {
                while (char === Operators[')'] && opStackTop !== Operators['(']) {
                    postfixStack.push(opStack.pop());
                    opStackTop = opStack[opStack.length - 1];
                }
                // 把左括号弹掉
                opStack.pop();
            }
        }
    }
    while (opStack.length !== 0) {
        const popChar = opStack.pop();

        if (popChar !== Operators['('] && popChar !== Operators[')']) {
            postfixStack.push(popChar)
        }
        
    }

    return postfixStack;
}


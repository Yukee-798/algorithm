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


let arr = [3, 2, 1,0, 2, 1,3, 3,6];
select_sort(arr, 0, arr.length - 1);

console.log(arr);
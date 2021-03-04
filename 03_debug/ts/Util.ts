export default class Util {
    static swap(arr: Array<number>, index1: number, index2: number): void {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
}

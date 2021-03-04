// import Util.*;
public class Main {
    public static void main(String[] args) {
        new Main().run();
    }

    void run() {
        int[] arr = {1, 2, 0, 19,3, 2, -2};
        select_sort(arr, 0, arr.length - 1);
        Util.pirntArr(arr);
    }


    void select_sort(int[] arr, int l, int r) {
        for (int i =  r; i >= l; i--) {
            int max = -Integer.MAX_VALUE;
            int indexOfMax = -1;
            for (int j = l; j <= i; j++) {
                if (arr[j] > max) {
                    max = arr[j];
                    indexOfMax = j;
                }
            }
            Util.swap(arr, indexOfMax, i);
        }
    }


    void bubble_sort(int[] arr, int l, int r) {
        for (int i = r; i >= l; i--) {
            for (int j = l; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    Util.swap(arr, j, j + 1);
                }
            }
        }
    }



   






    void setZeroes(int[][] matrix) {
        // 记录 matrix 中元素为 0 的下标
        int[] row = new int[matrix[0].length], col = new int[matrix.length];

        // 遍历 matrix
        for (int i = 0; i < row.length; i++) {
            for (int j = 0; j < col.length; j++) {
                if (matrix[i][j] == 0) {
                    // 记录 0 元素所在行号和列号，不需要一一对应行列，只需要知道是哪一行或哪一列
                    // 然后把该列 / 行清 0 即可
                    row[i] = 1;
                    col[j] = 1;
                }
            }
        }

        for (int i = 0; i < row.length; i++) {
            for (int j = 0; j < row.length; j++) {
                if (row[i] == 1 || col[j] == 1) {
                    matrix[i][j] = 0;
                }
            }
        }
    }
}
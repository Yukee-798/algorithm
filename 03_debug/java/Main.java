class Main {
    public static void main(String[] args) {
        // new Main().setZeroes();

    }


    public void setZeroes(int[][] matrix) {
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
```
给定一个长度为 n 的整数数列，以及一个整数 k，请用快速选择算法求出数列从小到大排序后的第 k 个数。

输入格式
第一行包含两个整数 n 和 k。

第二行包含 n 个整数（所有整数均在 1∼109 范围内），表示整数数列。

输出格式
输出一个整数，表示数列的第 k 小数。

数据范围
1≤n≤100000,
1≤k≤n
输入样例：
5 3
2 4 1 5 3
输出样例：
3
```
## 思路
* 利用快排思想
    * 使所有左区间的数小于 arr[pivot]
    * 使所有右区间的数大于 arr[pivot]
* 利用二分思想
    * 如果左边区间元素个数大于等于 k 则说明第 k 个数处于左区间，递归排序左区间
    * 否则递归排序右区间

```java
import java.io.*;
import java.util.*;
import java.math.*;
public class Main {
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter log = new BufferedWriter(new OutputStreamWriter(System.out));
    String[] sp;
    int n, k;
    int N = 100010;
    int[] arr = new int[N];

    void run() throws Exception {
        r();
        n = i(sp[0]);
        k = i(sp[1]);
        r();
        for (int i = 0; i < n; i++) {
            arr[i] = i(sp[i]);
        }
        
        log.write(quickSort(arr, 0, n - 1, k) + "");
        log.flush();
    }
    
    int quickSort(int[] arr, int l, int r, int k) {
        if (l >= r) return arr[l];

        // 快排模版
        int x = arr[l];
        int p1 = l - 1, p2 = r + 1;
        
        while (p1 < p2) {
            while (arr[++p1] < x);
            while (arr[--p2] > x);
            if (p1 < p2) {
                int temp = arr[p1];
                arr[p1] = arr[p2];
                arr[p2] = temp;
            }
        }

        // 最终 p2 就是分界点
        int pivot = p2;
        
        // 统计左区间元素个数
        int sl = pivot - l + 1;
        
        // 如果 k 小于 sl 则递归左区间
        if (k <= sl) return quickSort(arr, l, pivot, k);
        // 否则递归右区间，此时 k 变为右区间的第 k - sl 个数
        else return quickSort(arr, pivot + 1, r, k - sl);
    }
    
    int i(String s) {return Integer.parseInt(s);}// String => int
    String s(int i) {return String.valueOf(i);}// int => String
    void r() throws Exception{ sp = reader.readLine().split(" ");} // read
    public static void main(String[] args) throws Exception {new Main().run();}
}
```
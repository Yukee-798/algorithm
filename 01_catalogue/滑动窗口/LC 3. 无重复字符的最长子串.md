[3. 无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

## 暴力法
思路：
* 用一个窗口，initLen = s.length
* 不断收缩窗口，枚举出其所有到子串
* 将窗口包含到子串存放到 set 里面去重，如果 set 大小等于窗口大小就说明该窗口内无重复字符

```ts
function lengthOfLongestSubstring(s: string): number {
    let len = s.length;
    let set = new Set<string>();
    while(len >= 2) {
        for (let start = 0; start < s.length - 1; start++) {
            set.clear();
            let end: number;
            if ((end = start + len - 1) > s.length - 1) break;
            for (let p = start; p <= end; p++) {
                set.add(s.charAt(p));
            }
            if (set.size === len) return len;
        }
        len--;
    }
    return s === '' ? 0 : 1;
}
```
## 滑动窗口
思路：
* 窗口右端点不断向窗口(set)内添加元素
* 左端点根据条件收缩
  * set 集合中 contains 了右端点即将要添加的元素，则左端点++
* ans = max(ans, set.size)
```ts
function lengthOfLongestSubstring(s: string): number {
    
    let len = s.length;
    let set = new Set<string>();
    let start = 0;
    let ans = 0;

    for (let end = 0; end <= len - 1; end++) {

        // 左端点收缩条件
        while(set.has(s.charAt(end))) {
            set.delete(s.charAt(start++));
        }
        set.add(s.charAt(end));
        ans = Math.max(ans, set.size);
    }
    return ans;
}
```

[剑指 Offer 58 - I. 翻转单词顺序](https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/)
```ts
function reverseWords(s: string): string {
    s = s.trim();

    let ans = '';

    // 探针：找到空格
    let p1 = s.length - 1;

    // 尾针：指向单词最后一个字母
    let p2 = p1;

    while (p1 >= 0) {
        // [p1 + 1, p2] 区间为一个单词
        while (p1 >= 0 && s.charAt(p1) !== ' ') p1--;
        // 拼接单词
        ans += (s.substring(p1 + 1, p2 + 1) + ' ');
        // 跳过单词间所有空格
        while (p1 >= 0 && s.charAt(p1) === ' ') p1--;
        // p2 指向下一个单词头部
        p2 = p1;
    }
    return ans.trim();
};
```
```ts
function reverseWords(s: string): string {
    // 去除字符串前后空格 -> 将中间的所有空格替换为一个空格 -> 拆分为数组 -> 翻转数组 -> 字符数组转字符串
    return s.trim().replace(/\s+/g,' ').split(' ').reverse().join(' ');
};
```
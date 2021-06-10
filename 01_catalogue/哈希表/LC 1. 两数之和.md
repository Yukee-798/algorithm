[1. 两数之和](https://leetcode-cn.com/problems/two-sum/)
## 思路
* 最外面一层循环肯定是必须的
* 内层循环可以通过 map 的查找特性避免掉
```ts
function twoSum(nums: number[], target: number): number[] {
    const map = {};
    let ans = [];
    nums.forEach((num, index) => {
        if (`${target - num}` in map) {
            ans = [index, map[`${target - num}`]];
        }
        map[num] = index;
    });
    return ans;
};
```
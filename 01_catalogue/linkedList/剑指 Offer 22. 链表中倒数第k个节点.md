[剑指 Offer 22. 链表中倒数第k个节点](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)


### 方法一
* 先求出整个链表长度
* 再用 length - k 得出其正向的下标
* 扫描链表到 length - k 这个节点


```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {

    if (head === null) return null;

    let length = 0;
    let p = head;
    while (p !== null) {
        length++;
        p = p.next;
        
    }
    
    p = head;
    let targetIndex = length - k;
    let index= 0;
    while (p !== null) {
        
        if (index === targetIndex) return p;
        p = p.next;
        index++;
    }
    return null;
};
```
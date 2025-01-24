/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (l1.length == 1 && l2.length == 1) {
        return new ListNode(l1.val + l2.val);
    }
    const l1Arr = [];
    let current = l1;
    while (current) {
        l1Arr.push(current.val);
        current = current.next;
    }
    const l2Arr = [];
    current = l2;
    while (current) {
        l2Arr.push(current.val);
        current = current.next;
    }

    const [longerArr, shorterArr] = l1Arr.length >= l2Arr.length ? [l1Arr, l2Arr] : [l2Arr, l1Arr];


    const finalArr = [];
    let i = 0
    let carry = 0;
    while (i < longerArr.length || carry) {
        const sum = (longerArr[i] || 0) + (shorterArr[i] || 0) + carry;
        if (sum > 9) {
            finalArr.push(sum % 10);
            carry = 1;
        } else {
            finalArr.push(sum);
            carry = 0;
        }
        i++;
    }

    let head = new ListNode(finalArr[0]);
    current = head;
    for (let i = 1; i < finalArr.length; i++) {
        current.next = new ListNode(finalArr[i]);
        current = current.next;
    }
    return head;

};
// @lc code=end


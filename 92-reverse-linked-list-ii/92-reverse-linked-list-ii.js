/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let start = head;
    let curr = head;
    let i = 1;
    while (i < left) {
        start = curr;
        curr = curr.next;
        i += 1;
    } 
    let prev = null;
    let tail = curr;
    
    while (i >= left && i <= right) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
        i += 1;
    }
    start.next = prev;
    tail.next = curr;;
    if (left > 1) {
        return head;
    } else {
        return prev;
    }
};
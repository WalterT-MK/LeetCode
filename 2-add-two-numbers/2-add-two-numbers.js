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
    let node = new ListNode(null);
    let curr = node;
    let carry = false;
    let sum = null;
    while(l1 || l2 || carry) {
        curr.next = new ListNode(0);
        if (l1) {
            curr.next.val += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            curr.next.val += l2.val;
            l2 = l2.next;
        }
        if (carry) {
            curr.next.val += 1;
            carry = false;
        }
        if (curr.next.val > 9) {
            curr.next.val -= 10;
            carry = true;
        }
        curr = curr.next;
    }
    return node.next;
};
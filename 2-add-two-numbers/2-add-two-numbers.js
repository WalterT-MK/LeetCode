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
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (carry) {
            sum += 1;
            carry = false;
        }
        if (sum > 9) {
            sum -= 10;
            carry = true;
        }
        curr.next = new ListNode(sum);
        curr = curr.next;
        sum = 0;
    }
    return node.next;
};
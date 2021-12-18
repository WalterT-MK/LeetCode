/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var pointer2 = head;
    var ans = head;
    var pointer1 = ans;
    for (var i = 0; i < n; i++) {
        pointer2 = pointer2.next;
    }
    if (!pointer2) {
        return head.next;
    }
    while (pointer2.next) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
    pointer1.next = pointer1.next.next;
    return ans;
};
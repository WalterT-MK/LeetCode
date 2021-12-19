/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var half = (head) => {
    var fast = head;
    var slow = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    var secondHalf = slow.next;
    slow.next = null;
    return secondHalf;
    
}
var reversed = (head) => {
    var curr = head;
    var prev = null;
    var temp = null;
    while (curr) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}
var merge = (head1, head2) => {
    var l1 = null;
    var l2 = null;
    while (head2) {
        l1 = head1.next;
        l2 = head2.next;
        
        head1.next = head2;
        head2.next = l1;
        
        head1 = l1;
        head2 = l2;
    }
}
var reorderList = function(head) {
    if (head === null) {
        return;
    }
    var secondHalf = half(head);
    secondHalf = reversed(secondHalf);
    merge(head, secondHalf);
};

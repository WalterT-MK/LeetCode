/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var dummy = new ListNode(0);
    dummy.next = head;
    
    var curr = dummy;
    while (curr.next && curr.next.next) {
        var temp1 = curr.next;
        var temp2 = curr.next.next;
        
        curr.next.next = curr.next.next.next;
        curr.next = temp2;
        curr.next.next = temp1;
        
        curr = curr.next.next;
    }
    
    return dummy.next;
};
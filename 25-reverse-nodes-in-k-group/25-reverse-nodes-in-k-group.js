/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let reverseListNode = (node, k) => {
        let prev = null;
        let curr = node;
        while (k > 0) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
            k -= 1;
        }
        return prev;
    }
    let node = head;
    let tail = null;
    
    let newHead = null;
    
    while (node) {
        let count = 0;
        node = head;
        while (count < k && node) {
            node = node.next;
            count += 1;
        }
        if (count === k) {
            let revHead = reverseListNode(head, k);
            
            if (newHead === null) newHead = revHead;
            
            if (tail !== null) tail.next = revHead;
            
            tail = head;
            head = node;
        }
    }
    if (tail !== null) tail.next = head;
    if (newHead === null) return head;
    else return newHead;
};
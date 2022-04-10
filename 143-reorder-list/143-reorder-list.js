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
var reorderList = function(head) {
    var half = (head) => {
        let fast = head;
        let slow = head;
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let secondHalf = slow.next;
        slow.next = null;
        return secondHalf;
    }
    
    var reverse = (head) => {
        let curr = head;
        let prev = null;
        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp
        }
        return prev;
    }
    
    var merge = (head1, head2) => {
        let temp1, temp2
        while (head2) {
            temp1 = head1.next;
            temp2 = head2.next;
            
            head1.next = head2;
            head2.next = temp1;
            
            head1 = temp1;
            head2 = temp2;
        }
    }
    
    let secondHalf = half(head);
    secondHalf = reverse(secondHalf);
    merge(head, secondHalf);
};
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
    
    //use double pointer to find the middle node;
    var half = (head) => {
        let fast = head;
        let slow = head;
        while (fast.next && fast.next.next ) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let secondHalf = slow.next;
        slow.next = null; //cut down the linked list
        return secondHalf;
    }
    //reverse order of second half of linked list
    var reverse = (head) => {
        let curr = head;
        let prev = null;
        let temp = null;
        while (curr) {
            temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        return prev;
    }
    
    var merge = (first, second) => {
        let l1 = null;
        let l2 = null;
        while (second) {
            l1 = first.next;
            l2 = second.next;
            
            first.next = second;
            second.next = l1;
            
            first = l1;
            second = l2;
        }
    }
    
    var secondHalf = half(head);
    secondHalf = reverse(secondHalf);
    merge(head, secondHalf);
    
};
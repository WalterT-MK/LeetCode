/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeLists = (a,b) => {
    var newlist = {val:0,next:null};
    var crt = newlist;
    while (a !== null && b !== null) {
        if (a.val > b.val) {
            crt.next = b;
            b = b.next;
        } else {
            crt.next = a;
            a = a.next;
        }
        crt = crt.next;
    }
    crt.next = a || b;
    return newlist.next;
}
var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null;
    }
    while(lists.length > 1) {
        var list1 = lists.pop();
        var list2 = lists.pop();
        var merged = mergeLists(list1,list2);
        lists.push(merged);
    }
    return lists[0];
};
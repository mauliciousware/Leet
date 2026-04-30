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
    if(!head || !head.next) return head
    //LinkedList To Array
    let ll_array = []
    let current = head
    while(current){
        ll_array.push(current)
        current = current.next
    }
    let left = 0
    let right = ll_array.length-1

    while(left < right){
        ll_array[left].next = ll_array[right]
        left++

        if(left < right){
            ll_array[right].next = ll_array[left]
            right--
        }
    }

    ll_array[left].next = null

};
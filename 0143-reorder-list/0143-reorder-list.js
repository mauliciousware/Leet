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
function reverseList(current){
    let prev = null
    while(current){
        let front = current.next
        current.next = prev
        prev = current
        current = front
    }
    return prev
}
var reorderList = function(head) {
      //Half Reverse the linked list
      let slow = head
      let fast = head
      while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
      }
      fast=reverseList(slow.next)
      slow.next = null
      slow = head
      //Slow is pointing at the first ele
      //Fast is pointing to the last ele
      while(fast!=null){
        let front = slow.next
        slow.next = fast
        fast = fast.next
        slow.next.next = front
        slow = front
      }

      // merge
};
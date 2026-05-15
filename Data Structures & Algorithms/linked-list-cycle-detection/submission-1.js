/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let fast = head
        let slow = head

        while(true) {
            fast = fast.next
            if (fast === null) return false;
            fast = fast.next
            if (fast === null) return false;
            slow = slow.next;
            if (fast === slow) return true;
        }

    }
}

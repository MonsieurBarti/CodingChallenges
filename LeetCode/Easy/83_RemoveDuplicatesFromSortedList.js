/**
 * This code is solving the problem of removing duplicates from a sorted linked list.
 * The function takes a single parameter, the head of the linked list.
 * It initializes a variable "current" to the head of the list.
 * It then enters a while loop that continues until there are no more elements in the list.
 * Inside the while loop, it checks if the current node's value is equal to the value of the next node.
 * If it is, it skips over the next node by reassigning the current node's next property to the next node's next property,
 * effectively removing the duplicate node. If the current node's value is not equal to the next node's value, it moves on to the next node.
 * After the while loop, the function returns the head of the modified linked list.
 */

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
const deleteDuplicates = head => {
	let current = head;
	while (current && current.next) {
		if (current.val === current.next.val) {
			current.next = current.next.next;
		} else {
			current = current.next;
		}
	}
	return head;
};

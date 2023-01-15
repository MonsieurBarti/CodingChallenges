/**
 * This code is a solution to merge two linked lists together.
 * It uses a "dummy head" node to keep track of the starting point of the merged list and
 * a variable "tail" to keep track of the last node added to the merged list.
 * The while loop continues while both input lists are not empty. In each iteration,
 * it compares the values of the current nodes in both lists and appends the one with
 * the smaller value to the merged list. After appending the node, it updates the tail
 * variable to the last node added. Once one of the input lists is empty, the tail's next
 * pointer is set to the remaining non-empty list and the dummy head's next pointer is returned,
 * which is the starting point of the merged list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
	const dummyHead = { val: null, next: null };
	let tail = dummyHead;
	while (list1 && list2) {
		if (list1.val <= list2.val) {
			tail.next = list1;
			list1 = list1.next;
		} else {
			tail.next = list2;
			list2 = list2.next;
		}
		tail = tail.next;
	}
	tail.next = list1 || list2;
	return dummyHead.next;
};

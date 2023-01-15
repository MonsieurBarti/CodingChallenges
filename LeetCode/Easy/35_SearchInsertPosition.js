/**
 * This function uses a binary search algorithm to find the position where the target value should be inserted
 * in the nums array in order to maintain its sorted order. It starts by initializing two pointers left and right
 * to the first and last elements of the array respectively. It then enters a while loop where it calculates the middle
 * index of the current search range by taking the floor of the average of the left and right indices.
 * If the value at the middle index is less than the target, it means the target should be inserted after this value,
 * so the left pointer is moved to the next index after the middle index.
 * Otherwise, the target should be inserted before this value, so the right pointer is moved to the middle index.
 * This process continues until the left pointer is greater than or equal to the right pointer, at which point the algorithm exits the loop.
 * The final position where the target should be inserted is returned which is either left +1 or left.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
	let left = 0,
		right = nums.length - 1;
	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}
	return nums[left] < target ? left + 1 : left;
};

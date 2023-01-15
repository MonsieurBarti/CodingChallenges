/**
 * This code is a solution to remove duplicates from an array of numbers.
 * The variable k is used as a pointer to keep track of the last non-duplicate element encountered.
 * The outer for loop iterates through the entire array, starting from index 0.
 * The inner if statement checks if the current element at index i is not equal to the element at the current index of k.
 * If the elements are not equal, it means the current element at index i is a non-duplicate and is assigned to the next index of k, and k is incremented.
 * If the elements are equal, then the current element at index i is a duplicate and is ignored.
 * After the for loop completes, the function returns the final value of k + 1, which represents the length of the array after removing duplicates.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
	let k = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== nums[k]) {
			nums[++k] = nums[i];
		}
	}
	return k + 1;
};

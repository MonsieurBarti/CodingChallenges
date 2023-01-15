/**
 * The goal is to find two numbers in an array that add up to a given target.
 * The function starts by creating an empty set called complementSet.
 * It then loops through the input array nums using a for loop.
 * Inside the loop, it checks if the current array element is already in the set.
 * If it is, it returns an array containing the index of the complement (target minus the current array element) and the current index.
 * If the current array element is not in the set, it adds the complement of the current element (target minus the current array element) to the set.
 * This implementation uses a set to store the complements of the array elements, so that it can check
 * if the complement of the current element is already in the set in O(1) time.
 * Additionally, it uses the built-in nums.indexOf() function to find the index of the complement in the array,
 * which is O(n) in the worst case. This implementation has a time complexity of O(n) and a space complexity of O(n).
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	const complementSet = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (complementSet.has(nums[i])) {
			return [nums.indexOf(target - nums[i]), i];
		}
		complementSet.add(target - nums[i]);
	}
};

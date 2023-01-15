/**
 * This code is a function that takes in two parameters, an array of numbers called "nums" and a number called "val".
 * The function uses a variable called "k" initialized to 0. It then uses a for loop to iterate through the "nums" array.
 * Within the for loop, it uses an if statement to check if the current element in "nums" is not equal to "val".
 * If it is not, it assigns the current element in "nums" to the current index of "k" and increments "k".
 * The for loop then continues to the next index. After the for loop is finished, the function returns the value of "k",
 * which represents the number of elements in "nums" that are not equal to "val".
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
	let k = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nums[k++] = nums[i];
		}
	}
	return k;
};

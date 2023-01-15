/**
 * This code is using a binary search algorithm to find the square root of a given number x.
 * First, it checks if the input is 0, in which case it immediately returns 0.
 * Then it initializes two variables, left and right, to 1 and x respectively.
 * These will be used as the boundaries for the binary search.
 * It enters a while loop that continues as long as left is less than or equal to right.
 * Inside the loop, it calculates the mid point between left and right, and checks if
 * the square of mid is less than or equal to x and (mid + 1) * (mid + 1) is greater than x.
 * If both conditions are true, it returns mid as the square root.
 * Otherwise, if the square of mid is less than x, it updates left to be mid + 1.
 * If the square of mid is greater than x, it updates right to be mid - 1.
 * The loop continues until the square root is found and returned.
 */

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
	if (x === 0) return 0;
	let left = 1,
		right = x;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
			return mid;
		} else if (mid * mid < x) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
};

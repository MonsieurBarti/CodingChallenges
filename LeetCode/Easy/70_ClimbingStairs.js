/**
 * This code uses a bottom-up approach to solve the problem of climbing stairs.
 * It starts by initializing two variables, first and second, with the values of 1 and 2 respectively.
 * These variables represent the number of ways to reach the first and second steps.
 * The for loop then iterates from the 3rd step to the nth step. On each iteration, it calculates the number
 * of ways to reach the current step by adding the number of ways to reach the previous two steps (first and second).
 * This value is then stored in the variable "third".
 * After calculating the number of ways to reach the current step, the first variable is updated to the value of second
 * and second is updated to the value of third. This is done so that the next iteration can use the updated values for first and second.
 * Finally, after the for loop completes, the function returns the value of second which represents the number of ways to reach the nth step.
 * This solution is optimized as it uses a constant amount of space and the time complexity is O(n) as it only iterates through the loop n times.
 */

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
	if (n === 1) return 1;
	let first = 1,
		second = 2;
	for (let i = 3; i <= n; i++) {
		let third = first + second;
		first = second;
		second = third;
	}
	return second;
};
